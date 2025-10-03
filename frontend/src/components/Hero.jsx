import React from 'react';
import { Button } from './ui/button';
import { Github, Mail, ExternalLink, Cloud, Sparkles, Code2, Palette } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300/15 to-purple-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-300/25 to-pink-300/25 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Animated Profile Badge */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-2 animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none animate-fade-in drop-shadow-2xl">
              {profileData.name}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Code2 className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  {profileData.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Dynamic Summary with Icons */}
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {profileData.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Animated Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
          </div>

          {/* Floating Social Links */}
          <div className="flex items-center justify-center gap-6 mt-16">
            {[
              { icon: Github, href: profileData.github, color: 'from-indigo-400 to-purple-500' },
              { icon: Mail, href: `mailto:${profileData.email}`, color: 'from-purple-400 to-pink-500' },
              { icon: Cloud, href: profileData.cloudProfile, color: 'from-blue-400 to-indigo-500' },
              { icon: ExternalLink, href: profileData.portfolio, color: 'from-indigo-500 to-purple-600' }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gradient-to-r ${social.color} rounded-2xl text-white hover:scale-110 transition-all duration-300 hover:shadow-2xl transform animate-float backdrop-blur-sm border border-white/20`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;