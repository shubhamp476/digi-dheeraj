
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen overflow-hidden text-center text-white">
      
      <div className="relative w-100% h-[60vh] md:h-screen">
        <picture>
        
          <source srcSet="/BestVideoEditor.webp" media="(max-width: 767px)" />
          
          <img
            src="/BestVideoEditor1.webp"
            alt="Dheeraj Jangra - professional video editor portfolio background"
            className="absolute top-0 left-0 w-screen h-full object-cover"
          />
        </picture>

       
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 flex flex-col items-center justify-end">
          <h1 className="text-3xl md:text-7xl font-extrabold uppercase tracking-tight drop-shadow-lg mb-4">
            Hire The <span className="text-blue-400">Best Video Editor</span>
          </h1>

          {/* Paragraph hidden on mobile */}
          <p className="hidden md:block mt-2 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
            Transforming your vision into cinematic reality. Professional, creative, and reliable video editing and videography services tailored to your needs.
          </p>

          <a
            href="#portfolio"
            className="mt-4 inline-block bg-blue-500 text-white uppercase font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
