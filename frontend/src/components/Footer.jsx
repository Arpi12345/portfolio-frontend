import React from 'react';
import { Github, Mail, Cloud, ExternalLink, Heart } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: profileData.github,
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: `mailto:${profileData.email}`,
      label: 'Email'
    },
    {
      icon: Cloud,
      href: profileData.cloudProfile,
      label: 'Google Cloud'
    },
    {
      icon: ExternalLink,
      href: profileData.portfolio,
      label: 'Portfolio'
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-black mb-4">
              {profileData.name}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-md">
              Full Stack Web Developer passionate about creating innovative solutions with modern technologies. 
              Always learning, always building.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-black mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-600 hover:text-black transition-colors duration-200 font-light text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-black mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="text-gray-600 font-light">
                <div className="mb-2">{profileData.email}</div>
                <div className="mb-2">{profileData.phone}</div>
                <div>Patna, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 font-light text-sm">
              © {currentYear} {profileData.name}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 font-light text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;