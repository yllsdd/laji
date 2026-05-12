import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import PageShell from './components/PageShell';
import PremiumNav from './components/PremiumNav';
import { createTranslator } from './data/i18n';
import { categories, wasteItems } from './data/wasteData';
import Home from './pages/Home';
import {
  getFavorites,
  getStoredLanguage,
  getSurveyAnswers,
  saveFavorites,
  saveLanguage,
  saveSurveyAnswers,
} from './utils/storage';
import { normalizeFavoriteIds, toggleFavoriteIds } from './utils/favorites';

const supportedLanguages = ['ja', 'zh', 'en'];
const validWasteIds = wasteItems.map((item) => item.id);
const Search = lazy(() => import('./pages/Search'));
const Dictionary = lazy(() => import('./pages/Dictionary'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Survey = lazy(() => import('./pages/Survey'));
const Statistics = lazy(() => import('./pages/Statistics'));
const Project = lazy(() => import('./pages/Project'));

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [language, setLanguage] = useState(() => {
    const stored = getStoredLanguage();
    return supportedLanguages.includes(stored) ? stored : 'ja';
  });
  const [favoriteIds, setFavoriteIds] = useState(() => normalizeFavoriteIds(getFavorites(), validWasteIds));
  const [surveyAnswers, setSurveyAnswers] = useState(() => getSurveyAnswers());

  const t = useMemo(() => createTranslator(language), [language]);

  useEffect(() => {
    saveLanguage(language);
    document.documentElement.lang = language;
    document.title = `${t.pages[activePage]} | ${t.appName}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description);
  }, [language, activePage, t]);

  useEffect(() => {
    saveFavorites(favoriteIds);
  }, [favoriteIds]);

  useEffect(() => {
    saveSurveyAnswers(surveyAnswers);
  }, [surveyAnswers]);

  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  const toggleFavorite = useCallback((itemId) => {
    setFavoriteIds((current) => toggleFavoriteIds(current, itemId, validWasteIds));
  }, []);

  const submitSurvey = useCallback((answer) => {
    setSurveyAnswers((current) => [...current, answer]);
  }, []);

  const navigate = useCallback((pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const pageProps = {
    t,
    lang: language,
    categories,
    wasteItems,
    favoriteIds,
    favoriteSet,
    surveyAnswers,
    onToggleFavorite: toggleFavorite,
    onNavigate: navigate,
    onSubmitSurvey: submitSurvey,
  };

  const page = {
    home: (
      <Home
        {...pageProps}
        itemsCount={wasteItems.length}
        categoriesCount={categories.length}
        favoritesCount={favoriteIds.length}
        answersCount={surveyAnswers.length}
      />
    ),
    search: <Search {...pageProps} />,
    dictionary: <Dictionary {...pageProps} />,
    favorites: <Favorites {...pageProps} />,
    survey: <Survey {...pageProps} />,
    statistics: <Statistics {...pageProps} />,
    project: <Project {...pageProps} />,
  }[activePage];

  return (
    <div className="app-shell">
      <PremiumNav
        t={t}
        activePage={activePage}
        onNavigate={navigate}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="main-shell" aria-live="polite">
        <div
          key={activePage}
          className="page-container page-transition"
        >
          <Suspense
            fallback={
              <PageShell>
                <div className="page-loading" role="status">
                  {t.common.loading}
                </div>
              </PageShell>
            }
          >
            <PageShell>{page}</PageShell>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
