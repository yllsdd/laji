import IconRenderer from './IconRenderer';

export default function MicroBadge({ icon, children, tone = 'blue', className = '' }) {
  return (
    <span className={`micro-badge micro-badge--${tone} ${className}`}>
      {icon ? <IconRenderer name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
