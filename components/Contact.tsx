
import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './icons';

const contactMethods = [
  {
    icon: <PhoneIcon />,
    title: 'Call Us',
    details: ['9813127613', 'Mon-Sat: 9am - 8pm'],
    cta: 'Call Now',
    href: 'tel:9813127613',
  },
  {
    icon: <MailIcon />,
    title: 'Email Us',
    details: ["Have a question or feedback? I'd love to hear from you."],
    cta: 'Send an Email',
    href: 'mailto:dheerajjangra4550@gmail.com',
  },
  {
    icon: <LocationMarkerIcon />,
    title: 'Write Us',
    details: ['Looking for my address? Get in touch for collaboration details.'],
    cta: 'Find on Maps',
    href: 'https://maps.app.goo.gl/6G822k3wGMvLcCCbA',
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-light-text uppercase">
            Let's Create <span className="text-accent">Together</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-dark-text">
            Ready to hire the best video editor for your project? Reach out and let's discuss how I can bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-primary p-8 rounded-lg shadow-lg flex flex-col text-center items-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-accent w-12 h-12 mb-4">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-light-text">{method.title}</h3>
              <div className="flex-grow my-6 text-dark-text">
                {method.details.map((line, i) => (
                  <p key={i} className="mb-1">{line}</p>
                ))}
              </div>
              <a href={method.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-accent text-white uppercase font-bold text-sm px-6 py-3 rounded-md shadow-lg hover:bg-blue-500 transition-colors duration-300">
                {method.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
