import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Heart, Search } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import MascotMini from '../components/MascotMini';
import PremiumCard from '../components/PremiumCard';
import WasteCard from '../components/WasteCard';
import WasteDetailPanel from '../components/WasteDetailPanel';
import { getCategoryById } from '../data/wasteData';
import { getFavoriteItems } from '../utils/favorites';

export default function Favorites({
  t,
  lang,
  wasteItems,
  favoriteIds,
  favoriteSet,
  onToggleFavorite,
  onNavigate,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const detailRef = useRef(null);
  const selectedByTouchRef = useRef(false);
  const favoriteItems = useMemo(
    () => getFavoriteItems(wasteItems, favoriteIds),
    [wasteItems, favoriteIds]
  );
  const fallbackFavoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);
  const activeFavoriteSet = favoriteSet || fallbackFavoriteSet;
  const selectedItem = useMemo(
    () => favoriteItems.find((item) => item.id === selectedId) || favoriteItems[0] || null,
    [favoriteItems, selectedId]
  );
  const selectedCategory = selectedItem ? getCategoryById(selectedItem.categoryId) : null;

  useEffect(() => {
    if (!favoriteItems.length) {
      setSelectedId(null);
      return;
    }

    if (!favoriteItems.some((item) => item.id === selectedId)) {
      setSelectedId(favoriteItems[0].id);
    }
  }, [favoriteItems, selectedId]);

  const handleSelectItem = useCallback((itemId) => {
    selectedByTouchRef.current = true;
    setSelectedId(itemId);
  }, []);

  useEffect(() => {
    if (!selectedItem || !selectedByTouchRef.current) return;
    if (!window.matchMedia('(max-width: 900px)').matches) return;

    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [selectedItem]);

  return (
    <div className="page-stack favorites-page">
      <section className="page-hero favorites-hero">
        <div>
          <span className="section-eyebrow">{t.favorites.kicker}</span>
          <h1>{t.favorites.title}</h1>
          <p>{t.favorites.hint}</p>
        </div>
        <PremiumCard className="favorites-count" hover={false}>
          <Heart size={20} fill="currentColor" />
          <strong>{favoriteItems.length}</strong>
          <span>{t.favorites.count}</span>
          <MascotMini expression={favoriteItems.length ? 'happy' : 'empty'} size="sm" peek label={t.common.mascotLabel} />
        </PremiumCard>
      </section>

      {favoriteItems.length ? (
        <section className="favorites-workspace">
          <div className="favorites-collection">
            {favoriteItems.map((item) => (
              <Fragment key={item.id}>
                <WasteCard
                  item={item}
                  category={getCategoryById(item.categoryId)}
                  lang={lang}
                  t={t}
                  isFavorite={activeFavoriteSet.has(item.id)}
                  onToggleFavorite={onToggleFavorite}
                  onSelect={() => handleSelectItem(item.id)}
                  selected={selectedItem?.id === item.id}
                />
                {selectedItem?.id === item.id ? (
                  <WasteDetailPanel
                    as="section"
                    panelRef={detailRef}
                    item={selectedItem}
                    category={selectedCategory}
                    lang={lang}
                    t={t}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={onToggleFavorite}
                    className="mobile-inline-detail favorites-inline-detail"
                  />
                ) : null}
              </Fragment>
            ))}
          </div>

          <WasteDetailPanel
            item={selectedItem}
            category={selectedCategory}
            lang={lang}
            t={t}
            favoriteIds={favoriteIds}
            onToggleFavorite={onToggleFavorite}
            className="desktop-detail favorites-side-detail"
          />
        </section>
      ) : (
        <EmptyState
          icon="Heart"
          title={t.favorites.emptyTitle}
          text={t.favorites.emptyText}
          expression="empty"
          mascotLabel={t.common.mascotLabel}
          action={
            <button className="premium-action" type="button" onClick={() => onNavigate('search')} aria-label={t.menu.search}>
              <Search size={16} />
              {t.menu.search}
            </button>
          }
        />
      )}
    </div>
  );
}
