import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, subtitle }) => {
  return (
    <div className={`bg-nikeLightGray rounded-xl p-8 hover:bg-gray-200 transition-colors duration-300 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-4">
          {subtitle && <p className="text-nikeGray text-xs font-bold uppercase tracking-widest mb-1">{subtitle}</p>}
          {title && <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-nikeBlack">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
};