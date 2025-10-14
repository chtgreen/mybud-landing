import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'white' | 'off-white' | 'lavender' | 'primary' | 'gradient-soft';
  className?: string;
  id?: string;
}

export function Section({ children, background = 'white', className = '', id }: SectionProps) {
  const bgClass = background ? `bg-${background}` : '';
  return (
    <section id={id} className={`section ${bgClass} ${className}`.trim()}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

