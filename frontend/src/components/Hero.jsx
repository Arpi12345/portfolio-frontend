import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Mail } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const titles = [
    'Full Stack Web Developer',
    'MERN Stack Developer', 
    'Google Cloud Certified',
    'AI/ML Enthusiast'
  ];
  
  const currentTitle = titles[Math.floor(currentIndex / 50) % titles.length];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 150);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const textIndex = currentIndex % (currentTitle.length + 10);
    if (textIndex <= currentTitle.length) {
      setDisplayedText(currentTitle.slice(0, textIndex));
    } else {
      setDisplayedText(currentTitle);
    }
  }, [currentIndex, currentTitle]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 animate-gradient">
        {/* Floating Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-300/25 to-pink-300/25 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-300/35 to-blue-300/35 rounded-full blur-2xl animate-float delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-300/30 to-indigo-300/30 rounded-full blur-2xl animate-float delay-750"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 text-center">
        <div className="space-y-8">
          {/* Greeting with Emoji */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Arpita Raj</span> 👩‍💻
            </h1>
            
            {/* Typewriter Effect */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-indigo-200">
                {displayedText}
                <span className="animate-pulse text-white">|</span>
              </h2>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Certified in Google Cloud with expertise in AI/ML and full-stack development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button 
              onClick={() => window.open('/resume/arpita-raj-resume.pdf', '_blank')}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-10 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform glow-effect"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 px-10 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">18+</div>
              <div className="text-indigo-200 font-medium">Google Cloud Badges</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-indigo-200 font-medium">Full Stack Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-indigo-200 font-medium">Passion for Tech</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;