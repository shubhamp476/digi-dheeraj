import React, { useState } from 'react';

const WhyHire: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="why-hire" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-light-text uppercase">
          Why You Should Hire The <span className="text-accent">Best Video Editor</span>
        </h2>

        <div className="mt-8 max-w-4xl mx-auto text-lg text-dark-text space-y-6 text-left md:text-justify">
          <p>
            In today's visually-driven world, video content is king. However, simply capturing footage isn't enough to captivate an audience. The magic happens in post-production, where a skilled video editor transforms raw clips into a compelling story. Hiring the <strong>best video editor</strong> for your project isn't just an expense; it's an investment in quality, engagement, and results.
          </p>

          <div className={`${showMore ? 'block' : 'hidden'} md:block`}>
            <p>
              A professional video editor does more than just cut and splice clips. We are storytellers who understand pacing, rhythm, and emotional impact. We meticulously craft each frame, ensuring seamless transitions, perfect color grading, and crystal-clear audio. This attention to detail elevates your content from amateur to professional, building credibility and holding your viewers' attention from start to finish.
            </p>
            <br/>
            <p>
              By entrusting your project to an expert, you save valuable time and avoid the steep learning curve of complex editing software. This allows you to focus on what you do best—running your business, creating content, or planning your next event—while a dedicated professional handles the technical and creative heavy lifting to deliver a polished final product that exceeds your expectations.
            </p>
          </div>

          <button
            className="block md:hidden mt-4 text-accent font-semibold hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
