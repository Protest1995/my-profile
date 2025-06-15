
import React from 'react';
import { Skill } from '../../types';
import { ACCENT_BG_COLOR } from '../../constants';

const SkillBar: React.FC<Skill> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-neutral-200">{name}</span>
        <span className="text-sm font-medium text-yellow-500">{level}%</span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2.5">
        <div 
          className={`${ACCENT_BG_COLOR} h-2.5 rounded-full`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
