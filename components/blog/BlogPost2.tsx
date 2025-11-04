import React from 'react';
import { Page } from '../../App';

interface BlogPostProps {
  navigateTo: (page: Page) => void;
}

const BlogPost2: React.FC<BlogPostProps> = ({ navigateTo }) => {
  return (
    <article className="py-32 bg-secondary text-light-text">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => navigateTo('blog')} className="text-accent font-semibold mb-8 hover:text-white transition-colors">
          &larr; Back to Blog
        </button>
        
        <h1 className="text-4xl md:text-6xl font-black text-light-text uppercase mb-6">
          The Art of <span className="text-accent">Cinematic Storytelling:</span> A Video Editor's Guide
        </h1>
        
        <img 
          src="https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1384"
          alt="A person sitting in a movie theater, representing cinematic storytelling."
          className="w-full h-auto rounded-lg shadow-lg my-8"
        />

        <div className="prose prose-lg prose-dark max-w-none text-dark-text space-y-6">
          <p className="lead text-xl">
            What separates a standard video from a cinematic masterpiece? It's not just about high-resolution cameras or epic locations—it's about storytelling. The <strong>best video editors</strong> are storytellers first and technicians second. They use a unique set of tools to guide the audience's emotions and create a truly immersive experience.
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">Pacing: The Heartbeat of the Story</h2>
          <p>
            Cinematic editing is all about rhythm. The length of each shot and the speed of the cuts create a heartbeat for the film. A fast-paced action sequence might use rapid-fire cuts lasting less than a second, while an emotional, dramatic moment might linger on a single shot for much longer. An editor's job is to feel this rhythm and cut to its beat, controlling the flow of energy and emotion.
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">Sound Design: The Unseen Character</h2>
          <p>
            In cinema, what you hear is just as important as what you see. A great editor doesn't just add a background music track; they build a sonic world. This includes:
            <ul>
              <li><strong>Foley:</strong> The subtle sounds of footsteps, rustling clothes, or a cup being placed on a table that make the world feel real.</li>
              <li><strong>Ambiance:</strong> The background noise of a bustling city or a quiet forest that establishes the environment.</li>
              <li><strong>Music:</strong> A carefully chosen score that enhances emotion without overpowering the scene.</li>
            </ul>
            When done right, sound design becomes an invisible character that shapes the entire viewing experience.
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">The Power of the J-Cut and L-Cut</h2>
          <p>
            Professional editors use sophisticated techniques to create a smooth, seamless flow. Two of the most common are J-cuts and L-cuts.
            <ul>
                <li>A <strong>J-cut</strong> is when the audio from the next scene begins before the visuals change. It pulls the audience into the next shot.</li>
                <li>An <strong>L-cut</strong> is the opposite: the audio from one shot continues to play over the visuals of the next shot. This is often used in dialogue scenes to show a character's reaction while another is still speaking.</li>
            </ul>
            These simple tricks are fundamental to making edits feel natural and professional.
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">Color Grading: Painting with Emotion</h2>
          <p>
            Color is a powerful psychological tool. A professional video editor uses color grading to set the mood and tone of a story. Cool blues and greys can evoke feelings of sadness or isolation, while warm, saturated tones can create a sense of happiness and nostalgia. A consistent and intentional color palette is a hallmark of cinematic quality.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPost2;
