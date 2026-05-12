import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Heart,
  Home,
  Info,
  Recycle,
  Search,
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { id: 'home', icon: Home },
  { id: 'search', icon: Search },
  { id: 'dictionary', icon: BookOpen },
  { id: 'favorites', icon: Heart },
  { id: 'survey', icon: ClipboardList },
  { id: 'statistics', icon: BarChart3 },
  { id: 'project', icon: Info },
];

function NavButton({ item, label, active, onClick }) {
  const Icon = item.icon;

  return (
    <button
      className={active ? 'premium-nav__item active' : 'premium-nav__item'}
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      title={label}
    >
      <Icon size={17} />
      <span>{label}</span>
    </button>
  );
}

export default function PremiumNav({ t, activePage, onNavigate, language, onLanguageChange }) {
  return (
    <>
      <header className="premium-topbar">
        <button className="premium-brand" type="button" onClick={() => onNavigate('home')} aria-label={t.appName}>
          <span className="premium-brand__mark">
            <Recycle size={20} />
          </span>
          <span className="premium-brand__copy">
            <strong>{t.appName}</strong>
            <small>{t.region}</small>
          </span>
        </button>

        <nav className="premium-nav" aria-label={t.common.primaryNavigation}>
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              label={t('nav.' + item.id)}
              active={activePage === item.id}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </nav>

        <LanguageSwitcher language={language} onChange={onLanguageChange} label={t.common.language} />
      </header>

      <nav className="premium-tabbar" aria-label={t.common.mobileNavigation}>
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            label={t('nav.' + item.id)}
            active={activePage === item.id}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </nav>
    </>
  );
}
