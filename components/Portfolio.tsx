
import React from 'react';

interface VideoPlayerProps {
  src: string;
  aspectRatio?: '16/9' | '9/16';
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, aspectRatio = '16/9' }) => (
  <div className={`relative w-full rounded-lg overflow-hidden shadow-2xl group ${aspectRatio === '16/9' ? 'pb-[56.25%]' : 'pb-[177.77%]'}`}>
    
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      controls
      preload="metadata"
      playsInline
      disablePictureInPicture
      controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const Portfolio: React.FC = () => {
  const horizontalVideos = ['../public/BestVideoEditor1.hevc.mp4', '../public/BestVideoEditor2.hevc.mp4'];
  const verticalVideos = [
    { src: '../public/BestVideoEditor3.hevc.mp4', category: 'Videography' },
    { src: '../public/BestVideoEditor4.hevc.mp4', category: 'Videography' },
    { src: '../public/BestVideoEditor5.hevc.mp4', category: 'Videography' },
    { src: '../public/BestVideoEditor7.hevc.mp4', category: 'Mountain' },
    { src: '../public/BestVideoEditor11.hevc.mp4', category: 'Mountain' },
    { src: '../public/BestVideoEditor8.hevc.mp4', category: 'Mountain' },
    { src: '../public/BestVideoEditor9.hevc.mp4', category: 'Adventure' },
    { src: '../public/BestVideoEditor10.hevc.mp4', category: 'Adventure' },
    { src: '../public/BestVideoEditor6.hevc.mp4', category: 'Adventure' },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-light-text uppercase">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-dark-text">
            Here's a glimpse into my work. Each project showcases my commitment to quality and my ability as a creative video editor to bring stories to life.
          </p>
        </div>

        <div className="space-y-12">
          {horizontalVideos.map((src, index) => (
            <VideoPlayer key={index} src={src} aspectRatio="16/9" />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {verticalVideos.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              <VideoPlayer src={video.src} aspectRatio="9/16" />
              <p className="mt-4 text-sm font-semibold text-dark-text uppercase tracking-widest">{video.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
