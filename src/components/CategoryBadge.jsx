import IconRenderer from './IconRenderer';
import { getLocalizedName } from '../utils/locale';

export default function CategoryBadge({ category, lang, compact = false }) {
  if (!category) return null;
  const categoryName = getLocalizedName(category, lang);

  return (
    <span
      className={`category-badge ${compact ? 'category-badge--compact' : ''}`}
      style={{
        '--badge-color': category.color,
        '--badge-soft': category.softColor,
      }}
    >
      <IconRenderer name={category.icon} size={compact ? 13 : 15} />
      {categoryName}
    </span>
  );
}
