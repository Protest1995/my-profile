
import React from 'react';
import { BlogPostData } from '../../types';
import { ACCENT_COLOR } from '../../constants';

const BlogPostCard: React.FC<BlogPostData> = ({ title, date, imageUrl, excerpt }) => {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-full group">
      <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className={`text-xs ${ACCENT_COLOR} mb-1`}>{date}</p>
        <h4 className="text-lg font-semibold text-neutral-100 mb-2 group-hover:text-yellow-500 transition-colors duration-200">{title}</h4>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">{excerpt}</p>
        <a href="#" className={`text-sm ${ACCENT_COLOR} font-medium hover:underline self-start`}>
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
