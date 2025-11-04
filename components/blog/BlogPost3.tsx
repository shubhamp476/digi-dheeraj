import React from 'react';
import { Page } from '../../App';

interface BlogPostProps {
  navigateTo: (page: Page) => void;
}

const BlogPost3: React.FC<BlogPostProps> = ({ navigateTo }) => {
  return (
    <article className="py-32 bg-secondary text-light-text">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => navigateTo('blog')} className="text-accent font-semibold mb-8 hover:text-white transition-colors">
          &larr; Back to Blog
        </button>
        
        <h1 className="text-4xl md:text-6xl font-black text-light-text uppercase mb-6">
          How the Best Video Editors Use <span className="text-accent">Color Grading</span> to Transform Footage
        </h1>
        
        <img 
          src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          alt="A split screen showing the difference between ungraded and color graded video footage."
          className="w-full h-auto rounded-lg shadow-lg my-8"
        />

        <div className="prose prose-lg prose-dark max-w-none text-dark-text space-y-6">
          <p className="lead text-xl">
            Have you ever wondered why professional films look so rich and polished? A huge part of that cinematic magic comes from color grading. It's a crucial step in post-production where an editor manipulates color to create a specific mood and style. Let’s break down how the <strong>best video editors</strong> use this powerful tool.
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">Step 1: Color Correction - The Foundation</h2>
          <p>
            Before you can get creative, you have to get it right. The first step is color correction. This is the technical process of fixing any color issues and ensuring the footage looks natural and consistent. An editor will:
            <ul>
              <li><strong>Adjust White Balance:</strong> Make sure the whites are truly white, which corrects any unnatural color casts (like a yellow tint from indoor lighting).</li>
              <li><strong>Set Exposure:</strong> Correct shots that are too dark or too bright, ensuring a balanced image.</li>
              <li><strong>Balance Saturation:</strong> Ensure colors are not overly vibrant or washed out.</li>
              <li><strong>Match Shots:</strong> Make sure the color and brightness are consistent across all clips shot in the same scene.</li>
            </ul>
            Color correction creates a clean, professional baseline to build upon.
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">Step 2: Color Grading - The Creative Artistry</h2>
          <p>
            Once the footage is corrected, the creative fun begins. Color grading is about adding a stylistic look to evoke emotion and enhance the story. A professional video editor might:
            <ul>
              <li><strong>Create a "Look":</strong> Apply a specific color palette. For example, the famous teal-and-orange look in many Hollywood blockbusters creates a pleasing contrast that makes skin tones pop. A sci-fi film might use cool blues and greens, while a romantic comedy might favor warm, sunny yellows.</li>
              <li><strong>Guide the Viewer's Eye:</strong> Use color to draw attention to important parts of the frame. By slightly brightening a character's face or darkening the background, an editor can subtly direct focus.</li>
              <li><strong>Enhance the Narrative:</strong> Use color to reflect a character's emotional journey. A story might start with bright, happy colors that slowly become darker and desaturated as the character faces challenges.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold text-light-text pt-4">Why It Matters for Your Project</h2>
          <p>
            Professional color grading is one of the biggest differentiators between amateur and high-end video content. It adds production value, reinforces your brand's style, and makes your story more emotionally impactful. Whether you want a clean corporate look or a dramatic cinematic feel, a skilled editor can use color to transform your raw footage into a work of art.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPost3;
