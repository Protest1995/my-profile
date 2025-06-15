
import React from 'react';
import { TimelineItem } from '../../types';
import { ACCENT_COLOR } from '../../constants';

const TimelineEvent: React.FC<TimelineItem> = ({ date, title, institution, description }) => {
  return (
    <div className="relative pb-6 last:pb-0">
      {/* Dot on the timeline */}
      <div className={`absolute -left-[33px] top-1 w-4 h-4 rounded-full ${ACCENT_COLOR.replace('text-', 'bg-')} border-4 border-zinc-800`}></div>
      <div className="bg-zinc-900 p-5 rounded-lg shadow-md hover:shadow-yellow-500/20 transition-shadow duration-300">
        <span className={`text-xs font-semibold ${ACCENT_COLOR} uppercase`}>{date}</span>
        <h4 className="text-xl font-semibold text-neutral-100 mt-1">{title}</h4>
        <p className="text-sm text-neutral-400 mb-2">{institution}</p>
        <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
