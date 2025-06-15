
import React from 'react';

const PaletteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 2.245A17.93 17.93 0 003 4.255m0 0A17.915 17.915 0 0112 .02a17.915 17.915 0 019 4.235m-9 17.73a17.915 17.915 0 01-9-4.235m9 4.235a17.915 17.915 0 009-4.235m0 0A17.93 17.93 0 0012 19.745m0-17.5a17.93 17.93 0 019 4.235m0 0A17.93 17.93 0 013 4.255m9.75 3.99A2.25 2.25 0 0010.5 6h-3a2.25 2.25 0 00-2.25 2.25v3a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25v-3z" />
  </svg>
);

export default PaletteIcon;
