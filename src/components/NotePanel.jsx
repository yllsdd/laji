export default function NotePanel({ title, children, color, softColor, className = '' }) {
  return (
    <section
      className={`note-panel ${className}`}
      style={{ '--note-color': color, '--note-soft': softColor }}
    >
      {title ? <h3>{title}</h3> : null}
      <div className="note-panel__body">{children}</div>
    </section>
  );
}
