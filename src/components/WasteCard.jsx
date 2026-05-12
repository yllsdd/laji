import { CalendarClock, Coins, Heart, Info, ShieldAlert } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import IconRenderer from './IconRenderer';
import { getLocalizedName, getLocalizedText } from '../utils/locale';

export default function WasteCard({
  item,
  category,
  lang,
  t,
  isFavorite,
  onToggleFavorite,
  onSelect,
  selected = false,
  showDetails = false,
}) {
  const hasRisk = item.needReservation || item.needFee || category?.id === 'hazardous' || category?.id === 'special';
  const itemName = getLocalizedName(item, lang, t.common.unavailable);
  const disposal = getLocalizedText(item.disposal, lang, t.common.unavailable);
  const caution = getLocalizedText(item.caution, lang, t.common.unavailable);
  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (!onSelect || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    onSelect();
  };

  return (
    <article
      className={[
        'waste-card',
        selected ? 'waste-card--selected' : '',
        onSelect ? 'waste-card--clickable' : '',
        hasRisk ? 'waste-card--risk' : '',
      ].filter(Boolean).join(' ')}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={onSelect ? 0 : undefined}
      role={onSelect ? 'button' : undefined}
      aria-current={selected ? 'true' : undefined}
      aria-label={onSelect ? `${t.common.viewDetail}: ${itemName}` : undefined}
    >
      <div className="waste-card__top">
        <div className="waste-card__identity">
          <span className="waste-card__icon">
            <IconRenderer name={item.icon} size={22} />
          </span>
          <div>
            <h3>{itemName}</h3>
            <p>{item.names.ja} / {item.names.zh} / {item.names.en}</p>
          </div>
        </div>
        <button
          className={`icon-button ${isFavorite ? 'icon-button--favorite' : ''}`}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite?.(item.id);
          }}
          title={isFavorite ? t.common.removeFavorite : t.common.addFavorite}
          aria-label={isFavorite ? t.common.removeFavorite : t.common.addFavorite}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="waste-card__meta">
        <CategoryBadge category={category} lang={lang} compact />
        <span className={item.needReservation ? 'meta-chip meta-chip--warn' : 'meta-chip'}>
          <CalendarClock size={13} />
          {t.common.reservation}: {item.needReservation ? t.common.yes : t.common.no}
        </span>
        <span className={item.needFee ? 'meta-chip meta-chip--warn' : 'meta-chip'}>
          <Coins size={13} />
          {t.common.fee}: {item.needFee ? t.common.yes : t.common.no}
        </span>
        {hasRisk ? (
          <span className="meta-chip meta-chip--danger">
            <ShieldAlert size={13} />
            {t.common.warning}
          </span>
        ) : null}
      </div>

      {showDetails ? (
        <div className="waste-card__details">
          <p>
            <Info size={15} />
            {disposal}
          </p>
          <p>{caution}</p>
        </div>
      ) : null}
    </article>
  );
}
