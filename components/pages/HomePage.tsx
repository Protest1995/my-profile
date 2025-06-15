
import React from 'react';
import { ACCENT_COLOR, ACCENT_BG_COLOR } from '../../constants';
import DownloadIcon from '../icons/DownloadIcon';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] md:min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden -m-6 md:-m-12">
      {/* Background Image - subtle pattern or abstract */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/seed/homebg/1920/1080')" }}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 opacity-70"></div> {/* Dark overlay */}

      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-100">
          I'm John Doe
        </h1>
        <p className={`mt-4 text-2xl md:text-3xl ${ACCENT_COLOR} font-medium`}>
          Web Designer & Front-end Developer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-neutral-300 text-lg">
          Passionate about creating beautiful, intuitive, and highly functional web experiences. Turning complex problems into elegant solutions.
        </p>
        <div className="mt-10">
          <button 
            className={`${ACCENT_BG_COLOR} text-zinc-900 font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg flex items-center mx-auto`}
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
