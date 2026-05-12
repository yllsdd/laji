import { ArrowRight, Search, X } from 'lucide-react';

export default function CommandSearch({
  value = '',
  onChange,
  placeholder,
  actionLabel,
  suggestions = [],
  onSubmit,
  onFocus,
  readOnly = false,
  suggestionsLabel,
  inputLabel,
  clearLabel,
  className = '',
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(value);
  };

  const handleSuggestion = (suggestion) => {
    if (readOnly) {
      onFocus?.();
      return;
    }
    onChange?.(suggestion);
  };

  return (
    <form
      className={`command-search ${className}`}
      onSubmit={handleSubmit}
      onClick={readOnly ? onFocus : undefined}
    >
      <div className="command-search__field">
        <Search size={20} />
        <input
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label={inputLabel || placeholder}
        />
        {value && onChange ? (
          <button
            className="command-search__clear"
            type="button"
            onClick={() => onChange('')}
            aria-label={clearLabel}
          >
            <X size={15} />
          </button>
        ) : null}
      </div>

      {suggestions.length ? (
        <div className="command-search__suggestions" aria-label={suggestionsLabel}>
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              aria-label={suggestion}
              onClick={(event) => {
                event.stopPropagation();
                handleSuggestion(suggestion);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      ) : null}

      {actionLabel ? (
        <button className="command-search__action" type="submit" aria-label={actionLabel}>
          <span>{actionLabel}</span>
          <ArrowRight size={16} />
        </button>
      ) : null}
    </form>
  );
}
