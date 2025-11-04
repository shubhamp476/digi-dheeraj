import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Tools from './Tools';
import Contact from './Contact';
import WhyHire from './WhyHire';

const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyHire />
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Contact />
    </>
  );
};

export default HomeContent;