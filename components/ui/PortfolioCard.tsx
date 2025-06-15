
import React from 'react';
import { PortfolioItemData } from '../../types';
import { ACCENT_COLOR } from '../../constants';
import EyeIcon from '../icons/EyeIcon';

const PortfolioCard: React.FC<PortfolioItemData> = ({ title, category, imageUrl }) => {
  return (
    <div className="group relative bg-zinc-900 rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
        <EyeIcon className="w-10 h-10 text-yellow-500 mb-2" />
        <h4 className="text-xl font-semibold text-neutral-100 text-center">{title}</h4>
        <p className={`${ACCENT_COLOR} text-sm`}>{category}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
