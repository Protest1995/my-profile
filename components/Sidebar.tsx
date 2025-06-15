
import React from 'react';
import { Page, NavItem } from '../types';
import { NAVIGATION_ITEMS, ACCENT_COLOR, ACCENT_BG_COLOR } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';

interface SidebarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, navigateTo, isOpen, closeSidebar }) => {
  return (
    <aside 
      className={`fixed inset-y-0 left-0 w-80 bg-zinc-900 p-8 flex flex-col items-center shadow-2xl transform transition-transform duration-300 ease-in-out z-30 
                 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="text-center mt-8 md:mt-0">
        <img
          src="https://picsum.photos/seed/profile/150/150"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto border-4 border-zinc-700 object-cover"
        />
        <h1 className="mt-4 text-2xl font-semibold text-neutral-100">John Doe</h1>
        <p className={`${ACCENT_COLOR} text-sm`}>Web Designer & Front-end Developer</p>
      </div>

      <nav className="mt-12 flex-grow w-full">
        <ul>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.page} className="mb-1">
              <button
                onClick={() => {
                  navigateTo(item.page);
                  if (isOpen) closeSidebar(); // Close sidebar if open (mobile)
                }}
                className={`w-full flex items-center py-3 px-4 rounded-md transition-all duration-200 ease-in-out
                            hover:bg-zinc-700 hover:${ACCENT_COLOR} group
                            ${currentPage === item.page ? `${ACCENT_BG_COLOR} text-zinc-900 font-semibold shadow-md` : 'text-neutral-400'}`}
              >
                <item.icon className={`w-5 h-5 mr-3 transition-colors duration-200 ease-in-out ${currentPage === item.page ? 'text-zinc-900' : `group-hover:${ACCENT_COLOR} text-neutral-400`}`} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto text-center pb-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className={`text-neutral-500 hover:${ACCENT_COLOR} transition-colors`}><LinkedInIcon className="w-5 h-5" /></a>
          <a href="#" className={`text-neutral-500 hover:${ACCENT_COLOR} transition-colors`}><GithubIcon className="w-5 h-5" /></a>
          <a href="#" className={`text-neutral-500 hover:${ACCENT_COLOR} transition-colors`}><TwitterIcon className="w-5 h-5" /></a>
        </div>
        <p className="text-xs text-neutral-500">&copy; 2024 Leven Clone. All Rights Reserved.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
    