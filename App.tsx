import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WhatsAppIcon } from './components/icons';
import HomeContent from './components/HomeContent';
import BlogHome from './components/blog/BlogHome';
import BlogPost1 from './components/blog/BlogPost1';
import BlogPost2 from './components/blog/BlogPost2';
import BlogPost3 from './components/blog/BlogPost3';

export type Page = 'home' | 'blog' | 'blog/post1' | 'blog/post2' | 'blog/post3';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeContent />;
      case 'blog':
        return <BlogHome navigateTo={navigateTo} />;
      case 'blog/post1':
        return <BlogPost1 navigateTo={navigateTo} />;
      case 'blog/post2':
        return <BlogPost2 navigateTo={navigateTo} />;
      case 'blog/post3':
        return <BlogPost3 navigateTo={navigateTo} />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="bg-primary overflow-x-hidden">
      <Navbar navigateTo={navigateTo} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <a 
        href="https://wa.me/919813127613" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
};

export default App;