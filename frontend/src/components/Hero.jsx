import React from 'react';
import { Button } from './ui/button';
import { Github, Mail, ExternalLink, Cloud } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light text-black tracking-tight leading-none">
              {profileData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 tracking-wide">
              {profileData.title}
            </h2>
          </div>

          {/* Summary */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              {profileData.summary}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <a 
              href={profileData.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <Github className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors duration-200" />
            </a>
            <a 
              href={`mailto:${profileData.email}`}
              className="p-3 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors duration-200" />
            </a>
            <a 
              href={profileData.cloudProfile} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <Cloud className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors duration-200" />
            </a>
            <a 
              href={profileData.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <ExternalLink className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;