
import React from 'react';
import { ServiceItem } from '../../types';

const ServiceCard: React.FC<ServiceItem> = ({ icon, title, description }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center hover:shadow-yellow-500/30 transition-shadow duration-300 h-full flex flex-col items-center">
      {icon}
      <h4 className="text-xl font-semibold text-neutral-100 mb-2">{title}</h4>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
