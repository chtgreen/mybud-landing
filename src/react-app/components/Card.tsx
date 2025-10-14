import { ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  title: string;
  text: string;
  className?: string;
}

export function Card({ icon, title, text, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{text}</p>
    </div>
  );
}

