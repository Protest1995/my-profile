
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { ACCENT_COLOR } from '../../constants';
import CodeIcon from '../icons/CodeIcon';
import PaletteIcon from '../icons/PaletteIcon';
import SearchIcon from '../icons/SearchIcon';
import RocketIcon from '../icons/RocketIcon';

const services = [
  {
    icon: <PaletteIcon className={`w-10 h-10 ${ACCENT_COLOR} mb-4`} />,
    title: 'Web Design',
    description: 'Crafting visually stunning and user-friendly interfaces that engage and convert.',
  },
  {
    icon: <CodeIcon className={`w-10 h-10 ${ACCENT_COLOR} mb-4`} />,
    title: 'Development',
    description: 'Building robust, scalable, and performant web applications with modern technologies.',
  },
  {
    icon: <SearchIcon className={`w-10 h-10 ${ACCENT_COLOR} mb-4`} />,
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines to attract more organic traffic.',
  },
  {
    icon: <RocketIcon className={`w-10 h-10 ${ACCENT_COLOR} mb-4`} />,
    title: 'Performance',
    description: 'Optimizing websites for speed and efficiency, ensuring a seamless user experience.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <SectionTitle title="About Me" subtitle="Get to know me better" />
      
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <img 
            src="https://picsum.photos/seed/aboutpage/400/500" 
            alt="John Doe" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:col-span-3 text-neutral-300 space-y-4 text-lg">
          <h3 className="text-3xl font-semibold text-neutral-100">Hello, I'm <span className={ACCENT_COLOR}>John Doe</span></h3>
          <p>
            I am a passionate and results-oriented Web Designer and Front-end Developer with 5+ years of experience in creating dynamic, responsive, and user-centric web applications. My expertise lies in translating design concepts into high-quality code, ensuring seamless user experiences across various devices and browsers.
          </p>
          <p>
            I thrive in collaborative environments and am always eager to learn new technologies and methodologies to stay at the forefront of web development. My goal is to leverage my skills to build innovative digital solutions that solve real-world problems and delight users.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            <li><strong className="text-neutral-100">Age:</strong> 30</li>
            <li><strong className="text-neutral-100">Residence:</strong> USA</li>
            <li><strong className="text-neutral-100">Freelance:</strong> Available</li>
            <li><strong className="text-neutral-100">Address:</strong> New York, USA</li>
            <li><strong className="text-neutral-100">Phone:</strong> +1 234 567 8900</li>
            <li><strong className="text-neutral-100">Email:</strong> john.doe@example.com</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-neutral-100 mb-6 text-center md:text-left">What I Do</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
