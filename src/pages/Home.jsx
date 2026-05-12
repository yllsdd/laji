import { useCallback, useMemo } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Heart, Search } from 'lucide-react';
import IconRenderer from '../components/IconRenderer';
import MicroBadge from '../components/MicroBadge';
import PremiumCard from '../components/PremiumCard';
import ProductHero from '../components/ProductHero';

export default function Home({
  t,
  lang,
  categories,
  wasteItems,
  itemsCount,
  categoriesCount,
  favoritesCount,
  answersCount,
  onNavigate,
}) {
  const featuredCategories = useMemo(() => {
    const featuredIds = ['petBottle', 'hazardous', 'oversized', 'paper'];
    return featuredIds
      .map((id) => categories.find((category) => category.id === id))
      .filter(Boolean)
      .map((category) => ({
        category,
        samples: wasteItems.filter((item) => item.categoryId === category.id).slice(0, 3),
      }));
  }, [categories, wasteItems]);
  const openSearch = useCallback(() => onNavigate('search'), [onNavigate]);
  const openProject = useCallback(() => onNavigate('project'), [onNavigate]);
  const openDictionary = useCallback(() => onNavigate('dictionary'), [onNavigate]);

  return (
    <div className="page-stack home-page">
      <ProductHero t={t} lang={lang} wasteItems={wasteItems} onNavigate={onNavigate} />

      <section className="home-editorial">
        <div className="section-heading">
          <span className="section-eyebrow">{t.home.collection}</span>
          <h2>{t.home.quickTitle}</h2>
          <p>{t.home.quickText}</p>
        </div>

        <div className="editorial-metrics" aria-label={t.common.projectOverview}>
          <article>
            <strong>{itemsCount}</strong>
            <span>{t.common.items}</span>
          </article>
          <article>
            <strong>{categoriesCount}</strong>
            <span>{t.common.categories}</span>
          </article>
          <article>
            <strong>3</strong>
            <span>{t.common.languages}</span>
          </article>
        </div>
      </section>

      <section className="home-guide-grid">
        {featuredCategories.map(({ category, samples }, index) => {
          return (
            <PremiumCard
              as="button"
              type="button"
              className="guide-column-card"
              key={category.id}
              onClick={openDictionary}
              style={{ '--card-accent': category.color, '--card-soft': category.softColor }}
              aria-label={`${t.actions.openGuide}: ${category.names[lang]}`}
            >
              <div className="guide-column-card__index">0{index + 1}</div>
              <span className="guide-column-card__icon">
                <IconRenderer name={category.icon} size={26} />
              </span>
              <div>
                <h3>{category.names[lang]}</h3>
                <p>{category.description[lang]}</p>
              </div>
              <div className="guide-column-card__samples">
                {samples.map((item) => (
                  <span key={item.id}>{item.names[lang]}</span>
                ))}
              </div>
              <ArrowRight size={17} className="guide-column-card__arrow" />
            </PremiumCard>
          );
        })}
      </section>

      <section className="home-notes">
        <PremiumCard className="home-note home-note--wide" hover={false}>
          <span className="section-eyebrow">{t.home.tipsTitle}</span>
          <div className="note-list">
            {t.home.tips.map((tip, index) => (
              <p key={tip}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {tip}
              </p>
            ))}
          </div>
        </PremiumCard>

        <PremiumCard className="home-note home-note--stats" hover={false}>
          <div className="mini-stat">
            <Heart size={18} />
            <strong>{favoritesCount}</strong>
            <span>{t.home.saved}</span>
          </div>
          <div className="mini-stat">
            <CheckCircle2 size={18} />
            <strong>{answersCount}</strong>
            <span>{t.home.answers}</span>
          </div>
          <MicroBadge icon="NotebookPen" tone="white">{t.home.collectionText}</MicroBadge>
          <button type="button" onClick={openSearch} aria-label={t.home.openSearch}>
            <Search size={16} />
            {t.home.openSearch}
          </button>
        </PremiumCard>

        <PremiumCard className="home-note home-note--project" hover={false}>
          <BookOpen size={22} />
          <h3>{t.home.backgroundTitle}</h3>
          <p>{t.home.background}</p>
          <button type="button" onClick={openProject} aria-label={t.menu.project}>
            {t.menu.project}
            <ArrowRight size={16} />
          </button>
        </PremiumCard>
      </section>
    </div>
  );
}
