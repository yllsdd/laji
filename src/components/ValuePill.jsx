import IconRenderer from './IconRenderer';

export default function ValuePill({ icon, title, text, tone = 'blue' }) {
  return (
    <article className={`value-pill value-pill--${tone}`}>
      <span className="value-pill__icon">
        <IconRenderer name={icon} size={18} />
      </span>
      <span>
        <strong>{title}</strong>
        {text ? <small>{text}</small> : null}
      </span>
    </article>
  );
}
