import IconRenderer from './IconRenderer';
import MascotMini from './MascotMini';

export default function EmptyState({ icon = 'SearchX', title, text, action, expression = 'empty', mascotLabel }) {
  return (
    <div className="empty-state">
      <MascotMini expression={expression} size="sm" label={mascotLabel} />
      <h2>{title}</h2>
      <div className="empty-state__copy">
        {text ? <p>{text}</p> : null}
      </div>
      <div className="empty-state__fallback-icon">
        <IconRenderer name={icon} size={18} />
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
