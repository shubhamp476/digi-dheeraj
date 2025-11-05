
import React from 'react';

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-light-text uppercase">
          My Editing <span className="text-accent">Arsenal</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-dark-text">
          To be the best video editor, you need the best tools. I work with industry-standard software to ensure a professional, high-quality finish for every project.
        </p>
        <div className="mt-16 flex justify-center items-center">
          <img 
            src="../BestVideoEditorapps.webp" 
            alt="Editing software logos: Adobe Premiere Pro, After Effects, Photoshop"
            className="w-full max-w-3xl h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Tools;
