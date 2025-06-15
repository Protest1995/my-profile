
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import PortfolioCard from '../ui/PortfolioCard';
import { PortfolioItemData } from '../../types';

const portfolioItems: PortfolioItemData[] = [
  { id: '1', title: 'E-commerce Platform', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/ecom/600/400' },
  { id: '2', title: 'Corporate Website', category: 'Web Design', imageUrl: 'https://picsum.photos/seed/corp/600/400' },
  { id: '3', title: 'Mobile App UI', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/seed/mobileui/600/400' },
  { id: '4', title: 'SaaS Dashboard', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/saas/600/400' },
  { id: '5', title: 'Branding Project', category: 'Branding', imageUrl: 'https://picsum.photos/seed/brand/600/400' },
  { id: '6', title: 'Photography Portfolio', category: 'Web Design', imageUrl: 'https://picsum.photos/seed/photo/600/400' },
];

const PortfolioPage: React.FC = () => {
  // Simple filter buttons (UI only for now)
  const filters = ['All', 'Web Development', 'Web Design', 'UI/UX Design', 'Branding'];

  return (
    <div className="space-y-12">
      <SectionTitle title="Portfolio" subtitle="Check out my latest projects" />
      
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap gap-y-2">
        {filters.map(filter => (
          <button 
            key={filter} 
            className={`py-2 px-4 text-sm sm:text-base rounded-md transition-colors duration-200 
                        ${filter === 'All' ? 'bg-yellow-500 text-zinc-900 font-semibold' : 'bg-zinc-700 text-neutral-300 hover:bg-yellow-500 hover:text-zinc-900'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map(item => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
