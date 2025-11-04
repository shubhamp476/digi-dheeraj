
import React from 'react';
import { FilmIcon, SparklesIcon, CameraIcon, MusicNoteIcon } from './icons';

const services = [
  {
    icon: <FilmIcon />,
    title: 'Creative Video Editing',
    description: 'Full post-production services including storytelling, pacing, transitions, and creating a cohesive narrative that captivates your audience.',
  },
  {
    icon: <SparklesIcon />,
    title: 'Color Grading & Correction',
    description: 'Enhancing the mood and visual appeal of your footage with professional color correction and cinematic color grading to make your video pop.',
  },
  {
    icon: <CameraIcon />,
    title: 'Professional Videography',
    description: 'High-quality filming for events, corporate projects, and personal brand content. I capture stunning visuals to tell your story effectively.',
  },
  {
    icon: <MusicNoteIcon />,
    title: 'Sound Design & Mixing',
    description: 'Crafting the perfect audio experience with sound effects, music selection, and audio mixing to complement the visuals and engage viewers.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-light-text uppercase">
          My <span className="text-accent">Services</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-dark-text">
          As a top-tier video editor, I offer a comprehensive suite of services to cover all aspects of video production and post-production.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-accent w-12 h-12 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-light-text">{service.title}</h3>
              <p className="mt-2 text-dark-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
