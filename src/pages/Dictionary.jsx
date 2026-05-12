import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, BookOpenCheck, Boxes } from 'lucide-react';
import CategoryBadge from '../components/CategoryBadge';
import IconRenderer from '../components/IconRenderer';
import MascotMini from '../components/MascotMini';
import MicroBadge from '../components/MicroBadge';
import PremiumCard from '../components/PremiumCard';
import WasteCard from '../components/WasteCard';
import WasteDetailPanel from '../components/WasteDetailPanel';

export default function Dictionary({
  t,
  lang,
  categories,
  wasteItems,
  favoriteIds,
  favoriteSet,
  onToggleFavorite,
}) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id || 'burnable');
  const [selectedWasteId, setSelectedWasteId] = useState(null);
  const detailRef = useRef(null);
  const favoriteLookup = useMemo(() => favoriteSet || new Set(favoriteIds), [favoriteIds, favoriteSet]);
  const itemsByCategory = useMemo(
    () =>
      categories.reduce((result, category) => {
        result[category.id] = wasteItems.filter((item) => item.categoryId === category.id);
        return result;
      }, {}),
    [categories, wasteItems]
  );
  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId),
    [categories, activeCategoryId]
  );
  const activeItems = itemsByCategory[activeCategoryId] || [];
  const selectedWaste = useMemo(
    () => activeItems.find((item) => item.id === selectedWasteId) || null,
    [activeItems, selectedWasteId]
  );
  const categorySummaries = useMemo(
    () =>
      categories.map((category) => ({
        category,
        itemCount: itemsByCategory[category.id]?.length || 0,
        representativeItems: (itemsByCategory[category.id] || []).slice(0, 3),
      })),
    [categories, itemsByCategory]
  );

  useEffect(() => {
    if (selectedWasteId && !activeItems.some((item) => item.id === selectedWasteId)) {
      setSelectedWasteId(null);
    }
  }, [activeItems, selectedWasteId]);

  useEffect(() => {
    if (selectedWaste) {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedWaste]);

  const handleCategorySelect = useCallback((nextCategoryId) => {
    setActiveCategoryId(nextCategoryId);
    setSelectedWasteId(null);
  }, []);

  return (
    <div className="page-stack dictionary-page">
      <section className="page-hero editorial-page-hero">
        <div>
          <span className="section-eyebrow">{t.dictionary.kicker}</span>
          <h1>{t.dictionary.title}</h1>
          <p>{t.dictionary.subtitle}</p>
        </div>
        <MascotMini expression="soft" size="md" peek label={t.common.mascotLabel} />
      </section>

      <section className="dictionary-layout">
        <div className="dictionary-grid" aria-label={t.dictionary.selectCategory}>
          {categorySummaries.map(({ category, itemCount, representativeItems }, index) => {
            return (
              <PremiumCard
                as="button"
                type="button"
                key={category.id}
                className={activeCategoryId === category.id ? 'dictionary-card active' : 'dictionary-card'}
                onClick={() => handleCategorySelect(category.id)}
                style={{ '--card-accent': category.color, '--card-soft': category.softColor }}
                aria-pressed={activeCategoryId === category.id}
              >
                <div className="dictionary-card__number">{String(index + 1).padStart(2, '0')}</div>
                <span className="dictionary-card__icon">
                  <IconRenderer name={category.icon} size={28} />
                </span>
                <div className="dictionary-card__copy">
                  <h2>{category.names[lang]}</h2>
                  <p>{category.description[lang]}</p>
                </div>
                <div className="dictionary-card__meta">
                  <MicroBadge tone="white" icon="Boxes">
                    {itemCount} {t.common.countUnit}
                  </MicroBadge>
                  <ArrowRight size={16} />
                </div>
                <div className="dictionary-card__samples">
                  <small>{t.dictionary.representative}</small>
                  <div>
                    {representativeItems.map((item) => (
                      <span key={item.id}>{item.names[lang]}</span>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            );
          })}
        </div>

        <aside className="category-detail premium-category-detail">
          {activeCategory ? (
            <>
              <div
                className="category-detail__header"
                style={{ '--detail-color': activeCategory.color, '--detail-soft': activeCategory.softColor }}
              >
                <span className="category-detail__icon">
                  <IconRenderer name={activeCategory.icon} size={32} />
                </span>
                <div>
                  <span className="section-eyebrow">{t.dictionary.detail}</span>
                  <h2>{activeCategory.names[lang]}</h2>
                  <p>{activeCategory.description[lang]}</p>
                </div>
              </div>

              <div className="dictionary-detail__chips">
                <CategoryBadge category={activeCategory} lang={lang} />
                <MicroBadge icon="BookOpenCheck" tone="white">
                  {t.dictionary.includedItems}
                </MicroBadge>
                <MicroBadge icon="Boxes" tone="white">
                  {activeItems.length} {t.common.countUnit}
                </MicroBadge>
              </div>

              <div className="panel-heading panel-heading--compact">
                <h3>{t.dictionary.includedItems}</h3>
                <span>
                  <BookOpenCheck size={15} />
                  {activeItems.length} {t.common.countUnit}
                </span>
              </div>

              <div className="compact-item-grid">
                {activeItems.map((item) => (
                  <WasteCard
                    key={item.id}
                    item={item}
                    category={activeCategory}
                    lang={lang}
                    t={t}
                    isFavorite={favoriteLookup.has(item.id)}
                    onToggleFavorite={onToggleFavorite}
                    onSelect={() => setSelectedWasteId(item.id)}
                    selected={selectedWasteId === item.id}
                    showDetails={false}
                  />
                ))}
              </div>

              <WasteDetailPanel
                as="section"
                panelRef={detailRef}
                item={selectedWaste}
                category={activeCategory}
                lang={lang}
                t={t}
                favoriteIds={favoriteIds}
                onToggleFavorite={onToggleFavorite}
                emptyTitle={t.dictionary.selectItemPrompt}
                className="dictionary-item-detail"
              />
            </>
          ) : (
            <MicroBadge icon="MousePointerClick">{t.dictionary.selectCategory}</MicroBadge>
          )}
          <span className="category-detail__corner">
            <Boxes size={30} />
          </span>
        </aside>
      </section>
    </div>
  );
}
