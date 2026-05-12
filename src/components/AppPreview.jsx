import { CalendarClock, Coins, Search, ShieldAlert } from 'lucide-react';
import { getCategoryById } from '../data/wasteData';
import IconRenderer from './IconRenderer';
import MascotMini from './MascotMini';
import MicroBadge from './MicroBadge';

export default function AppPreview({ lang, t, wasteItems }) {
  const petBottle = wasteItems.find((item) => item.id === 'pet-drink-bottle') || wasteItems[0];
  const battery = wasteItems.find((item) => item.id === 'hazard-mobile-battery') || wasteItems[1];
  const petCategory = petBottle ? getCategoryById(petBottle.categoryId) : null;

  return (
    <div className="app-preview" aria-label={t.common.appPreview}>
      <div className="app-preview__stage">
        <div className="app-preview__phone">
          <div className="app-preview__chrome">
            <span />
            <strong>{t.preview.title}</strong>
            <small>{t.preview.region}</small>
          </div>

          <div className="app-preview__search-pill">
            <Search size={16} />
            <span>{t.home.searchPlaceholder.split(/[、,，]/)[0]}</span>
          </div>

          <article className="preview-reminder">
            <div>
              <span>{t.preview.today}</span>
              <strong>{t.preview.reminder}</strong>
              <p>{t.preview.reminderText}</p>
            </div>
            <CalendarClock size={22} />
          </article>

          <article className="preview-result">
            <span className="preview-result__icon" style={{ '--preview-color': petCategory?.color, '--preview-soft': petCategory?.softColor }}>
              <IconRenderer name={petBottle?.icon} size={22} />
            </span>
            <div>
              <small>{t.preview.searchResult}</small>
              <strong>{petBottle?.names[lang]}</strong>
              <p>{petBottle?.names.ja}</p>
            </div>
            <MicroBadge tone="mint" icon="Recycle">
              {petCategory?.names[lang]}
            </MicroBadge>
          </article>

          <article className="preview-warning">
            <ShieldAlert size={18} />
            <div className="preview-warning__content">
              <div className="preview-warning__header">
                <strong>{t.preview.dangerNotice}</strong>
                <span className="app-preview__fee-badge">
                  <Coins size={15} />
                  <span>{t.preview.feeNotRequired}</span>
                </span>
              </div>
              <p>{battery?.names[lang]} / {battery?.names.ja}</p>
            </div>
          </article>

          <article className="preview-phrase">
            <small>{t.preview.savedJapanese}</small>
            <p>{battery?.japanesePhrase}</p>
          </article>
        </div>

        <MascotMini className="app-preview__mascot peek-mascot" expression="soft" size="lg" label={t.common.mascotLabel} />
      </div>
    </div>
  );
}
