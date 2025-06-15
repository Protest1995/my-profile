
import React from 'react';
// This is the same icon as BriefcaseIcon, but named differently to avoid import conflicts if used in the same file.
// In a real project, you might organize icons differently or use a library.
const BriefcaseIconWork: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V6.323a2.25 2.25 0 012.25-2.25h4.13L10.5 7.5h3l.621-3.427a2.252 2.252 0 012.132-1.873h1.267a2.25 2.25 0 012.25 2.25V14.15zM15 9.75a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" />
  </svg>
);

export default BriefcaseIconWork;
