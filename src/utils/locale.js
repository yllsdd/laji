export const getLocalizedText = (value, lang, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value[lang] || value.ja || value.en || value.zh || fallback;
};

export const getLocalizedName = (entity, lang, fallback = '') =>
  getLocalizedText(entity?.names, lang, fallback || entity?.id || '');
