
import React from 'react';
import { ACCENT_COLOR } from '../../constants';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 relative inline-block">
        {title}
        <span className={`absolute -bottom-2 left-0 w-16 h-1 ${ACCENT_COLOR.replace('text-', 'bg-')}`}></span>
      </h2>
      {subtitle && <p className="mt-3 text-neutral-400 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
