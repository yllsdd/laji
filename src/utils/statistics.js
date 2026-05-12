export const buildCategoryStats = (categories, wasteItems, lang) => {
  const counts = wasteItems.reduce((result, item) => {
    result[item.categoryId] = (result[item.categoryId] || 0) + 1;
    return result;
  }, {});

  return categories.map((category) => ({
    id: category.id,
    name: category.names?.[lang] || category.names?.ja || category.id,
    count: counts[category.id] || 0,
    color: category.color,
    softColor: category.softColor,
  }));
};

export const buildFavoriteCategoryStats = (categories, wasteItems, favoriteIds, lang) => {
  const favoriteSet = new Set(favoriteIds);
  const favoriteItems = wasteItems.filter((item) => favoriteSet.has(item.id));
  const counts = favoriteItems.reduce((result, item) => {
    result[item.categoryId] = (result[item.categoryId] || 0) + 1;
    return result;
  }, {});

  return categories
    .map((category) => ({
      id: category.id,
      name: category.names?.[lang] || category.names?.ja || category.id,
      value: counts[category.id] || 0,
      color: category.color,
    }))
    .filter((item) => item.value > 0);
};

export const buildSurveyDifficultyStats = (surveyAnswers, options) =>
  options
    .map((option, index) => ({
      id: String(index),
      name: option,
      value: surveyAnswers.filter((answer) => answer.difficultyIndex === index || answer.difficulty === option).length,
    }))
    .filter((item) => item.value > 0);

export const buildSurveyUnclearCategoryStats = (categories, surveyAnswers, lang) => {
  const counts = surveyAnswers.reduce((result, answer) => {
    if (!answer.unclearCategory) return result;
    result[answer.unclearCategory] = (result[answer.unclearCategory] || 0) + 1;
    return result;
  }, {});

  return categories
    .map((category) => ({
      id: category.id,
      name: category.names?.[lang] || category.names?.ja || category.id,
      value: counts[category.id] || 0,
      color: category.color,
    }))
    .filter((item) => item.value > 0);
};

export const getTopCategory = (categoryData) =>
  [...categoryData].sort((a, b) => b.count - a.count)[0] || null;
