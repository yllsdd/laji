export default function MascotMini({
  expression = 'soft',
  size = 'md',
  peek = false,
  className = '',
  label = '',
}) {
  const mouth = {
    soft: <path className="mascot-mini__mouth" d="M53 66 Q60 72 67 66" />,
    happy: <path className="mascot-mini__mouth" d="M51 65 Q60 75 69 65" />,
    thinking: <path className="mascot-mini__mouth" d="M53 68 Q60 65 67 68" />,
    warning: <path className="mascot-mini__mouth" d="M53 69 Q60 62 67 69" />,
    empty: <ellipse className="mascot-mini__mouth-fill" cx="60" cy="68" rx="4.5" ry="3.8" />,
  }[expression] || <path className="mascot-mini__mouth" d="M53 66 Q60 72 67 66" />;

  return (
    <span className={`mascot-mini mascot-mini--${size} ${peek ? 'mascot-mini--peek' : ''} ${className}`}>
      <svg viewBox="0 0 120 120" role={label ? 'img' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true}>
        <path className="mascot-mini__shadow" d="M28 101 C40 108 80 108 92 101 C78 96 42 96 28 101Z" />
        <path className="mascot-mini__ear mascot-mini__ear--left" d="M36 31 C26 9 50 8 53 33Z" />
        <path className="mascot-mini__ear mascot-mini__ear--right" d="M67 33 C72 8 96 10 84 32Z" />
        <path className="mascot-mini__tail" d="M88 69 C105 66 107 85 93 88 C85 87 83 78 88 69Z" />
        <path className="mascot-mini__face" d="M25 58 C25 35 40 22 61 22 C82 22 96 36 96 59 C96 85 82 100 60 100 C38 100 25 85 25 58Z" />
        <ellipse className="mascot-mini__eye" cx="48" cy="58" rx="3.5" ry="4.6" />
        <ellipse className="mascot-mini__eye" cx="72" cy="58" rx="3.5" ry="4.6" />
        {expression === 'thinking' ? (
          <g className="mascot-mini__brows">
            <path d="M42 49 Q48 45 54 49" />
            <path d="M66 50 Q72 46 78 50" />
          </g>
        ) : null}
        {expression === 'warning' ? (
          <path className="mascot-mini__sweat" d="M82 44 C89 53 87 60 81 61 C75 59 76 51 82 44Z" />
        ) : null}
        {expression === 'empty' ? (
          <path className="mascot-mini__sweat" d="M78 62 C84 72 82 79 76 80 C70 78 71 70 78 62Z" />
        ) : null}
        <ellipse className="mascot-mini__blush" cx="38" cy="69" rx="7" ry="4" />
        <ellipse className="mascot-mini__blush" cx="82" cy="69" rx="7" ry="4" />
        <path className="mascot-mini__nose" d="M57 62 Q60 64 63 62" />
        {mouth}
        <path className="mascot-mini__paw" d="M34 81 C29 74 39 71 44 78 C45 84 38 86 34 81Z" />
        <path className="mascot-mini__paw" d="M86 81 C91 74 81 71 76 78 C75 84 82 86 86 81Z" />
      </svg>
    </span>
  );
}
