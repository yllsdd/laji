import {
  BookmarkPlus,
  CalendarClock,
  CheckCircle2,
  Coins,
  Heart,
  ShieldAlert,
} from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import EmptyState from './EmptyState';
import IconRenderer from './IconRenderer';
import NotePanel from './NotePanel';
import { getLocalizedName, getLocalizedText } from '../utils/locale';

export default function WasteDetailPanel({
  as: Component = 'aside',
  item,
  category,
  lang,
  t,
  favoriteIds,
  onToggleFavorite,
  emptyTitle,
  className = '',
  panelRef,
}) {
  const hasRisk = item
    ? item.needReservation || item.needFee || ['hazardous', 'special'].includes(item.categoryId)
    : false;
  const isFavorite = item ? favoriteIds.includes(item.id) : false;
  const itemName = getLocalizedName(item, lang, t.common.unavailable);
  const disposal = getLocalizedText(item?.disposal, lang, t.common.unavailable);
  const caution = getLocalizedText(item?.caution, lang, t.common.unavailable);

  return (
    <Component
      ref={panelRef}
      className={['detail-panel', 'premium-detail-panel', className].filter(Boolean).join(' ')}
      style={{
        '--detail-color': category?.color || '#5db7de',
        '--detail-soft': category?.softColor || '#eef9ff',
      }}
    >
      {item ? (
        <>
          <div className="detail-hero">
            <span className="detail-hero__icon" style={{ color: category?.color, background: category?.softColor }}>
              <IconRenderer name={item.icon} size={30} />
            </span>
            <div>
              <span className="section-eyebrow">{t.search.detail}</span>
              <h2>{itemName}</h2>
              <p>{item.names.ja} / {item.names.zh} / {item.names.en}</p>
            </div>
          </div>

          <div className="detail-badge-row">
            <CategoryBadge category={category} lang={lang} />
            <span className={hasRisk ? 'status-pill status-pill--danger' : 'status-pill status-pill--safe'}>
              {hasRisk ? <ShieldAlert size={14} /> : <CheckCircle2 size={14} />}
              {hasRisk ? t.search.cautionStatus : t.search.safe}
            </span>
          </div>

          <div className="detail-grid">
            <div>
              <CalendarClock size={17} />
              <strong>{t.common.reservation}</strong>
              <span>{item.needReservation ? t.common.yes : t.common.no}</span>
            </div>
            <div>
              <Coins size={17} />
              <strong>{t.common.fee}</strong>
              <span>{item.needFee ? t.common.yes : t.common.no}</span>
            </div>
          </div>

          <NotePanel title={t.common.disposal} color={category?.color} softColor={category?.softColor}>
            <p>{disposal}</p>
          </NotePanel>
          <NotePanel title={t.common.caution} className="note-panel--warning">
            <p>{caution}</p>
          </NotePanel>
          <figure className="phrase-quote">
            <figcaption>{t.search.phrase}</figcaption>
            <blockquote>{item.japanesePhrase}</blockquote>
          </figure>

          <button
            className={isFavorite ? 'premium-action premium-action--saved' : 'premium-action'}
            type="button"
            onClick={() => onToggleFavorite?.(item.id)}
            aria-label={isFavorite ? t.common.removeFavorite : t.common.addFavorite}
          >
            {isFavorite ? <Heart size={17} fill="currentColor" /> : <BookmarkPlus size={17} />}
            {isFavorite ? t.common.favoriteAdded : t.common.addFavorite}
          </button>
        </>
      ) : (
        <EmptyState
          title={emptyTitle || t.search.noSelection}
          icon="MousePointerClick"
          expression="empty"
          mascotLabel={t.common.mascotLabel}
        />
      )}
    </Component>
  );
}
