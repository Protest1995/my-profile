
import { Page, NavItem } from './types';
import HomeIcon from './components/icons/HomeIcon';
import UserIcon from './components/icons/UserIcon';
import BriefcaseIcon from './components/icons/BriefcaseIcon';
import CollectionIcon from './components/icons/CollectionIcon';
import ChatAltIcon from './components/icons/ChatAltIcon';
import MailIcon from './components/icons/MailIcon';

export const NAVIGATION_ITEMS: NavItem[] = [
  { page: Page.Home, label: 'Home', icon: HomeIcon },
  { page: Page.About, label: 'About Me', icon: UserIcon },
  { page: Page.Resume, label: 'Resume', icon: BriefcaseIcon },
  { page: Page.Portfolio, label: 'Portfolio', icon: CollectionIcon },
  { page: Page.Blog, label: 'Blog', icon: ChatAltIcon },
  { page: Page.Contact, label: 'Contact', icon: MailIcon },
];

export const ACCENT_COLOR = 'text-yellow-500';
export const ACCENT_BG_COLOR = 'bg-yellow-500';
export const ACCENT_BORDER_COLOR = 'border-yellow-500';
