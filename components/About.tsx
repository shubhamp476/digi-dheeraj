import React, { useState } from 'react';

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-light-text uppercase">
            Meet Dheeraj: The <span className="text-accent">Creative Force</span>
          </h2>

          
          <p className="mt-6 text-lg text-dark-text leading-relaxed">
            Hello! I'm Dheeraj Jangra, a passionate and detail-oriented video editor and videographer with a mission to tell compelling stories through the power of video. With years of experience in post-production, I've honed my skills to become one of the <strong>best video editors</strong> for clients seeking high-quality, impactful content.
          </p>

          
          <div className={`${showMore ? 'block' : 'hidden'} md:block`}>
            <p className="mt-4 text-lg text-dark-text leading-relaxed">
              My expertise lies in understanding a client's vision and bringing it to life with precision and creativity. From dynamic social media clips to cinematic corporate videos, I handle every project with dedication, ensuring the final product not only meets but exceeds expectations. My goal is to create videos that resonate with audiences and achieve your objectives.
            </p>
          </div>

          
          <button
            className="block md:hidden mt-4 text-accent font-semibold hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>

          <a
            href="#contact"
            className="mt-8 inline-block text-accent font-semibold text-lg border-b-2 border-accent hover:text-white hover:border-white transition-colors"
          >
            Let's Collaborate &rarr;
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="../BestVideoEditor01.png"
            alt="Dheeraj Jangra, a professional video editor for hire"
            className="rounded-lg shadow-2xl w-full max-w-sm"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
