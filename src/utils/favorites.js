export const normalizeFavoriteIds = (ids = [], validIds) => {
  const validSet = validIds ? new Set(validIds) : null;
  const uniqueIds = new Set();

  ids.forEach((id) => {
    if (typeof id !== 'string') return;
    if (validSet && !validSet.has(id)) return;
    uniqueIds.add(id);
  });

  return [...uniqueIds];
};

export const toggleFavoriteIds = (ids, itemId, validIds) => {
  if (!itemId) return normalizeFavoriteIds(ids, validIds);

  const normalizedIds = normalizeFavoriteIds(ids, validIds);
  return normalizedIds.includes(itemId)
    ? normalizedIds.filter((id) => id !== itemId)
    : [...normalizedIds, itemId];
};

export const getFavoriteItems = (items, favoriteIds) => {
  const favoriteSet = new Set(favoriteIds);
  return items.filter((item) => favoriteSet.has(item.id));
};

export const isFavoriteItem = (favoriteIds, itemId) => favoriteIds.includes(itemId);
