const normalize = (value) =>
  String(value || '')
    .toLowerCase()
    .normalize('NFKC')
    .replace(/\s+/g, '');

const includesFuzzy = (text, query) => {
  const target = normalize(text);
  const needle = normalize(query);

  if (!needle) return true;
  if (target.includes(needle)) return true;

  let index = 0;
  for (const char of target) {
    if (char === needle[index]) index += 1;
    if (index === needle.length) return true;
  }

  return false;
};

export const searchWasteItems = (items, query, categoryId = 'all') => {
  const normalizedQuery = normalize(query);

  return items.filter((item) => {
    const matchesCategory = categoryId === 'all' || item.categoryId === categoryId;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableValues = [
      item.names.ja,
      item.names.zh,
      item.names.en,
      item.disposal.ja,
      item.disposal.zh,
      item.disposal.en,
      item.caution.ja,
      item.caution.zh,
      item.caution.en,
      item.japanesePhrase,
      ...item.keywords,
    ];

    return searchableValues.some((value) => includesFuzzy(value, normalizedQuery));
  });
};
