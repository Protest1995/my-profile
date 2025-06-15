
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import BlogPostCard from '../ui/BlogPostCard';
import { BlogPostData } from '../../types';

const blogPosts: BlogPostData[] = [
  { 
    id: '1', 
    title: 'Mastering Tailwind CSS for Rapid UI Development', 
    date: 'October 26, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    excerpt: 'An in-depth guide to leveraging Tailwind CSS for building modern user interfaces quickly and efficiently.'
  },
  { 
    id: '2', 
    title: 'The Rise of TypeScript in Modern Web Development', 
    date: 'September 15, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    excerpt: 'Exploring the benefits of TypeScript and why it has become a staple for large-scale applications.'
  },
  { 
    id: '3', 
    title: 'Effective State Management in React Applications', 
    date: 'August 02, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    excerpt: 'A comparative look at different state management solutions for React like Context API, Redux, and Zustand.'
  },
   { 
    id: '4', 
    title: 'Optimizing Web Performance: A Checklist', 
    date: 'July 18, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog4/600/400',
    excerpt: 'Key techniques and tools for improving your website\'s speed and user experience.'
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <SectionTitle title="Latest Posts" subtitle="Insights, tutorials, and thoughts on web development" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
