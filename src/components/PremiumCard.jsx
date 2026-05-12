export default function PremiumCard({
  as = 'article',
  children,
  className = '',
  hover = true,
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={['premium-card', hover ? 'premium-card--hoverable' : '', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
}
