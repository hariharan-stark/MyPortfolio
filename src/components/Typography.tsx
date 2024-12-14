interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function HeadingXL({ children, className = '' }: HeadingProps) {
  return (
    <h1 className={`heading-xl ${className}`}>
      {children}
    </h1>
  );
}

export function HeadingLarge({ children, className = '' }: HeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-wide ${className}`}>
      {children}
    </h2>
  );
}

export function HeadingMedium({ children, className = '' }: HeadingProps) {
  return (
    <h3 className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wide ${className}`}>
      {children}
    </h3>
  );
}

export function BodyText({ children, className = '' }: HeadingProps) {
  return (
    <p className={`text-lg text-gray-300 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}