import React from 'react';
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://www.instagram.com/dhe_erajjangra', icon: <InstagramIcon />, label: 'Instagram' },
    { href: 'https://youtube.com/@facttech234', icon: <YouTubeIcon />, label: 'YouTube' },
    { href: 'https://wa.me/919813127613', icon: <WhatsAppIcon />, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-secondary text-dark-text py-12 px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-light-text mb-6">Connect With Me</h3>
        
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-dark-text hover:text-accent transition-transform duration-300 transform hover:scale-125 w-8 h-8">
              {link.icon}
            </a>
          ))}
        </div>
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dheeraj Jangra (Digidheeraj). All Rights Reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Professional Portfolio for the Best Video Editor services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
