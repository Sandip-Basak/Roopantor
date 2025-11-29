import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', className = '' }) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col gap-2 mb-12 ${alignClass[align]} ${className}`}>
      <span className="text-roopantor-gold uppercase tracking-[0.3em] text-xs font-sans font-bold">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white">
        {title}
      </h2>
      <div className="w-24 h-1 bg-roopantor-gold mt-4" />
    </div>
  );
};