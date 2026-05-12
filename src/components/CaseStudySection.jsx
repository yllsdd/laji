import IconRenderer from './IconRenderer';

export default function CaseStudySection({ eyebrow, title, body, icon, index, accent = 'blue' }) {
  return (
    <article className={`case-section case-section--${accent}`}>
      <div className="case-section__meta">
        <span>{String(index).padStart(2, '0')}</span>
        <IconRenderer name={icon} size={21} />
      </div>
      <div>
        <small>{eyebrow}</small>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </article>
  );
}
