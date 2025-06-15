
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import TimelineEvent from '../ui/TimelineEvent';
import { Skill, TimelineItem } from '../../types';
import AcademicCapIcon from '../icons/AcademicCapIcon';
import BriefcaseIconWork from '../icons/BriefcaseIconWork'; // Renamed to avoid conflict

const experience: TimelineItem[] = [
  {
    date: '2021 - Present',
    title: 'Senior Frontend Developer',
    institution: 'Tech Solutions Inc.',
    description: 'Led a team of developers in creating modern web applications using React, TypeScript, and Next.js. Improved application performance by 30%.',
  },
  {
    date: '2018 - 2021',
    title: 'Frontend Developer',
    institution: 'Web Innovators LLC',
    description: 'Developed and maintained responsive websites and e-commerce platforms. Collaborated with UI/UX designers to implement pixel-perfect designs.',
  },
];

const education: TimelineItem[] = [
  {
    date: '2014 - 2018',
    title: 'B.Sc. in Computer Science',
    institution: 'University of Technology',
    description: 'Graduated with honors. Focused on web development, software engineering, and database management.',
  },
  {
    date: '2012 - 2014',
    title: 'Associate Degree in IT',
    institution: 'Community College',
    description: 'Foundation courses in programming, networking, and web design.',
  },
];

const skills: Skill[] = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React & Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js & Express', level: 75 },
  { name: 'Git & GitHub', level: 88 },
  { name: 'UI/UX Design Principles', level: 80 },
];

const ResumePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <SectionTitle title="Resume" subtitle="My professional journey and skills" />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-100 mb-6 flex items-center">
            <BriefcaseIconWork className="w-7 h-7 mr-3 text-yellow-500" />
            Experience
          </h3>
          <div className="space-y-6 relative border-l-2 border-zinc-700 pl-6">
            {experience.map((item, index) => (
              <TimelineEvent key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-neutral-100 mb-6 flex items-center">
            <AcademicCapIcon className="w-7 h-7 mr-3 text-yellow-500" />
            Education
          </h3>
          <div className="space-y-6 relative border-l-2 border-zinc-700 pl-6">
            {education.map((item, index) => (
              <TimelineEvent key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-neutral-100 mb-8 text-center md:text-left">My Skills</h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
