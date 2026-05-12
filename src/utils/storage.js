import { LANG_STORAGE_KEY } from '../data/i18n';

const FAVORITES_KEY = 'garbage-support-favorites';
const SURVEY_KEY = 'garbage-support-survey-answers';

const hasStorage = () => typeof window !== 'undefined' && Boolean(window.localStorage);

const readJson = (key, fallback) => {
  try {
    if (!hasStorage()) return fallback;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  try {
    if (!hasStorage()) return;
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private browsing. The app should still work.
  }
};

export const getStoredLanguage = () => {
  try {
    if (!hasStorage()) return 'ja';
    return localStorage.getItem(LANG_STORAGE_KEY) || 'ja';
  } catch {
    return 'ja';
  }
};

export const saveLanguage = (language) => {
  try {
    if (!hasStorage()) return;
    localStorage.setItem(LANG_STORAGE_KEY, language);
  } catch {
    // Keep the in-memory state even when localStorage is blocked.
  }
};

export const getFavorites = () => {
  const favorites = readJson(FAVORITES_KEY, []);
  return Array.isArray(favorites) ? favorites : [];
};

export const saveFavorites = (favoriteIds) => writeJson(FAVORITES_KEY, favoriteIds);

export const getSurveyAnswers = () => {
  const answers = readJson(SURVEY_KEY, []);
  return Array.isArray(answers) ? answers : [];
};

export const saveSurveyAnswers = (answers) => writeJson(SURVEY_KEY, answers);
