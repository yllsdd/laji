import { languages } from '../data/i18n';

export default function LanguageSwitcher({ language, onChange, label }) {
  return (
    <div className="language-switcher" aria-label={label}>
      <span className="language-switcher__label">{label}</span>
      {languages.map((item) => (
        <button
          className={language === item.code ? 'active' : ''}
          type="button"
          key={item.code}
          onClick={() => onChange(item.code)}
          title={item.label}
          aria-label={`${label}: ${item.label}`}
          aria-pressed={language === item.code}
        >
          {item.short}
        </button>
      ))}
    </div>
  );
}
