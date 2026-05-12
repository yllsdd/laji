import { BookOpen, Search } from 'lucide-react';
import AppPreview from './AppPreview';
import CommandSearch from './CommandSearch';
import ValuePill from './ValuePill';

export default function ProductHero({ t, lang, wasteItems, onNavigate }) {
  return (
    <section className="product-hero">
      <div className="product-hero__copy">
        <span className="hero-kicker">{t.home.kicker}</span>
        <h1>{t.home.heroTitle}</h1>
        <p>{t.home.heroSubtitle}</p>

        <CommandSearch
          readOnly
          placeholder={t.home.searchPlaceholder}
          actionLabel={t.home.searchCta}
          suggestions={t.home.suggestions}
          suggestionsLabel={t.common.quickKeywords}
          inputLabel={t.search.placeholder}
          onFocus={() => onNavigate('search')}
          onSubmit={() => onNavigate('search')}
          className="product-hero__search"
        />

        <div className="hero-links">
          <button type="button" onClick={() => onNavigate('search')} aria-label={t.home.searchCta}>
            <Search size={16} />
            {t.home.searchCta}
          </button>
          <button type="button" onClick={() => onNavigate('dictionary')} aria-label={t.actions.openGuide}>
            <BookOpen size={16} />
            {t.actions.openGuide}
          </button>
        </div>
      </div>

      <AppPreview lang={lang} t={t} wasteItems={wasteItems} />

      <div className="product-hero__values">
        {t.home.values.map(([key, title, text, icon], index) => (
          <ValuePill
            key={key}
            icon={icon}
            title={title}
            text={text}
            tone={index === 1 ? 'mint' : index === 2 ? 'pink' : 'blue'}
          />
        ))}
      </div>
    </section>
  );
}
