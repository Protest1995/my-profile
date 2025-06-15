
export enum Page {
  Home = 'Home',
  About = 'About',
  Resume = 'Resume',
  Portfolio = 'Portfolio',
  Blog = 'Blog',
  Contact = 'Contact',
}

export interface NavItem {
  page: Page;
  label: string;
  icon: React.ElementType;
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
}

export interface TimelineItem {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItemData {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BlogPostData {
  id: string;
  title:string;
  date: string;
  imageUrl: string;
  excerpt: string;
}
