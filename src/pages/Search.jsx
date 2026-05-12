import { useCallback, useEffect, useMemo, useState } from 'react';
import CommandSearch from '../components/CommandSearch';
import EmptyState from '../components/EmptyState';
import MascotMini from '../components/MascotMini';
import MicroBadge from '../components/MicroBadge';
import WasteCard from '../components/WasteCard';
import WasteDetailPanel from '../components/WasteDetailPanel';
import { getCategoryById } from '../data/wasteData';
import useDebouncedValue from '../hooks/useDebouncedValue';
import { searchWasteItems } from '../utils/search';

export default function Search({
  t,
  lang,
  categories,
  wasteItems,
  favoriteIds,
  favoriteSet,
  onToggleFavorite,
}) {
  const [queryInput, setQueryInput] = useState('');
  const [categoryId, setCategoryId] = useState('all');
  const [selectedId, setSelectedId] = useState(null);
  const debouncedQuery = useDebouncedValue(queryInput, 180);

  const filteredItems = useMemo(
    () => searchWasteItems(wasteItems, debouncedQuery, categoryId),
    [wasteItems, debouncedQuery, categoryId]
  );

  const fallbackFavoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);
  const activeFavoriteSet = favoriteSet || fallbackFavoriteSet;

  useEffect(() => {
    if (!filteredItems.length) {
      setSelectedId(null);
      return;
    }

    if (!filteredItems.some((item) => item.id === selectedId)) {
      setSelectedId(filteredItems[0].id);
    }
  }, [filteredItems, selectedId]);

  const selectedItem = useMemo(
    () => filteredItems.find((item) => item.id === selectedId),
    [filteredItems, selectedId]
  );
  const selectedCategory = selectedItem ? getCategoryById(selectedItem.categoryId) : null;
  const handleCategoryChange = useCallback((nextCategoryId) => {
    setCategoryId(nextCategoryId);
  }, []);

  return (
    <div className="page-stack search-page">
      <section className="command-center">
        <div className="command-center__copy">
          <span className="section-eyebrow">{t.search.kicker}</span>
          <h1>{t.search.title}</h1>
          <p>{t.search.subtitle}</p>
        </div>
        <MascotMini expression="search" size="md" className="command-center__mascot" label={t.common.mascotLabel} />
        <CommandSearch
          value={queryInput}
          onChange={setQueryInput}
          placeholder={t.search.placeholder}
          suggestions={t.search.suggestions}
          suggestionsLabel={t.common.quickKeywords}
          inputLabel={t.search.placeholder}
          clearLabel={t.common.clearSearch}
          className="command-center__search"
        />
        <div className="filter-row premium-filter-row" aria-label={t.search.filterByCategory}>
          <button
            className={categoryId === 'all' ? 'filter-chip active' : 'filter-chip'}
            type="button"
            onClick={() => handleCategoryChange('all')}
            aria-pressed={categoryId === 'all'}
          >
            {t.common.all}
          </button>
          {categories.map((category) => (
            <button
              className={categoryId === category.id ? 'filter-chip active' : 'filter-chip'}
              type="button"
              key={category.id}
              style={{ '--chip-color': category.color, '--chip-soft': category.softColor }}
              onClick={() => handleCategoryChange(category.id)}
              aria-pressed={categoryId === category.id}
            >
              <span />
              {category.names[lang]}
            </button>
          ))}
        </div>
      </section>

      <section className="search-workspace">
        <div className="results-panel">
          <div className="panel-heading">
            <div>
              <span className="section-eyebrow">{t.search.results}</span>
              <h2>{t.search.resultTitle}</h2>
            </div>
            <MicroBadge icon="BookOpen" tone="white">
              {filteredItems.length} {t.common.countUnit}
            </MicroBadge>
          </div>

          <div className="results-list">
            {filteredItems.length ? (
              filteredItems.map((item) => (
                <WasteCard
                  key={item.id}
                  item={item}
                  category={getCategoryById(item.categoryId)}
                  lang={lang}
                  t={t}
                  isFavorite={activeFavoriteSet.has(item.id)}
                  onToggleFavorite={onToggleFavorite}
                  onSelect={() => setSelectedId(item.id)}
                  selected={item.id === selectedId}
                />
              ))
            ) : (
              <EmptyState
                title={t.search.noResultTitle}
                text={`${t.search.noResultText} ${t.search.emptyHint}`}
                icon="SearchX"
                expression="thinking"
                mascotLabel={t.common.mascotLabel}
              />
            )}
          </div>
        </div>

        <WasteDetailPanel
          item={selectedItem}
          category={selectedCategory}
          lang={lang}
          t={t}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
        />
      </section>
    </div>
  );
}
