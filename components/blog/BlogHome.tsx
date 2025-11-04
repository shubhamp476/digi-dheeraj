import React from 'react';
import { Page } from '../../App';

interface BlogHomeProps {
  navigateTo: (page: Page) => void;
}

const blogPosts = [
  {
    id: 'post1',
    title: '5 Signs You Need to Hire a Professional Video Editor',
    excerpt: 'Is your video content not performing as you hoped? Discover the key signs that indicate it\'s time to bring in a professional to elevate your work.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679079455733-3f80a3b82f01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988',
  },
  {
    id: 'post2',
    title: 'The Art of Cinematic Storytelling: A Video Editor\'s Guide',
    excerpt: 'Learn how the best video editors use techniques like pacing, sound design, and narrative structure to turn simple footage into a cinematic experience.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1384',
  },
  {
    id: 'post3',
    title: 'How the Best Video Editors Use Color Grading to Transform Footage',
    excerpt: 'Dive into the world of color grading. See how manipulating color can dramatically change the mood, tone, and professional quality of your videos.',
    imageUrl: 'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
  },
];

const BlogHome: React.FC<BlogHomeProps> = ({ navigateTo }) => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-light-text uppercase">
            The <span className="text-accent">Editor's Cut</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-dark-text">
            Insights, tips, and inspiration from the world of video editing and post-production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-secondary rounded-lg shadow-xl overflow-hidden flex flex-col group">
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-light-text mb-3">{post.title}</h3>
                <p className="text-dark-text mb-6 flex-grow">{post.excerpt}</p>
                <button
                  onClick={() => navigateTo(`blog/${post.id}` as Page)}
                  className="mt-auto self-start text-accent font-semibold text-lg hover:text-white transition-colors"
                >
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
