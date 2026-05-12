export default function Mascot({
  expression = 'happy',
  size = 'md',
  motion = 'float',
  className = '',
  label = '',
}) {
  const mouth = {
    happy: <path className="mascot-mouth" d="M95 122 Q110 139 125 122" />,
    search: <path className="mascot-mouth" d="M100 125 Q110 131 120 125" />,
    thinking: <path className="mascot-mouth" d="M100 128 Q110 124 120 128" />,
    warning: <path className="mascot-mouth" d="M101 128 Q110 119 119 128" />,
    empty: <ellipse className="mascot-mouth-fill" cx="110" cy="128" rx="8" ry="6" />,
  }[expression] || <path className="mascot-mouth" d="M95 122 Q110 139 125 122" />;

  return (
    <div className={`mascot mascot--${size} mascot--${motion} mascot--${expression} ${className}`}>
      <svg viewBox="0 0 220 220" role={label ? 'img' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true}>
        <defs>
          <linearGradient id="mascotEar" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8f3ff" />
            <stop offset="100%" stopColor="#8ed8ff" />
          </linearGradient>
          <linearGradient id="mascotBody" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f6fbff" />
          </linearGradient>
        </defs>

        <path className="mascot-shadow" d="M58 188 C78 202 144 203 164 188 C148 179 76 179 58 188Z" />
        <path className="mascot-tail" d="M160 135 C191 128 197 161 173 166 C158 169 152 154 160 135Z" />
        <path className="mascot-ear mascot-ear--left" d="M66 52 C47 18 86 12 94 54 Z" />
        <path className="mascot-ear mascot-ear--right" d="M126 54 C136 13 176 20 154 55 Z" />
        <path className="mascot-ear-inner mascot-ear-inner--left" d="M72 47 C64 30 82 27 86 49 Z" />
        <path className="mascot-ear-inner mascot-ear-inner--right" d="M134 50 C140 28 158 32 148 49 Z" />
        <path className="mascot-face" d="M43 103 C43 61 74 38 111 38 C148 38 178 61 178 104 C178 151 151 179 110 179 C69 179 43 151 43 103Z" />

        <g className="mascot-eyes">
          <ellipse className="mascot-eye" cx="88" cy="108" rx="6.5" ry="8" />
          <ellipse className="mascot-eye" cx="132" cy="108" rx="6.5" ry="8" />
        </g>

        {expression === 'thinking' ? (
          <g className="mascot-brows">
            <path d="M79 91 Q88 85 97 91" />
            <path d="M123 92 Q132 86 141 92" />
          </g>
        ) : null}

        {expression === 'warning' ? (
          <g>
            <path className="mascot-sweat" d="M150 82 C160 95 158 106 148 108 C139 105 140 94 150 82Z" />
            <path className="mascot-brows" d="M77 92 Q88 86 98 95" />
            <path className="mascot-brows" d="M122 95 Q132 86 143 92" />
          </g>
        ) : null}

        {expression === 'search' ? (
          <g className="mascot-glass">
            <circle cx="149" cy="132" r="14" />
            <path d="M159 142 L173 156" />
          </g>
        ) : null}

        {expression === 'empty' ? (
          <path className="mascot-tear" d="M141 118 C151 132 149 142 140 144 C132 141 132 131 141 118Z" />
        ) : null}

        <ellipse className="mascot-blush" cx="71" cy="126" rx="13" ry="8" />
        <ellipse className="mascot-blush" cx="149" cy="126" rx="13" ry="8" />
        <path className="mascot-nose" d="M106 113 Q110 117 114 113" />
        {mouth}

        <g className="mascot-paws">
          <path d="M64 146 C55 134 72 128 81 139 C84 148 71 154 64 146Z" />
          <path d="M155 146 C164 134 147 128 139 139 C136 148 148 154 155 146Z" />
        </g>

        <g className="mascot-sparkles">
          <path d="M34 78 L39 88 L49 93 L39 98 L34 108 L29 98 L19 93 L29 88Z" />
          <path d="M178 62 L182 70 L190 74 L182 78 L178 86 L174 78 L166 74 L174 70Z" />
        </g>
      </svg>
    </div>
  );
}
