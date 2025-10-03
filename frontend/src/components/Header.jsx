import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-indigo-100 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className={`font-bold text-2xl cursor-pointer hover:scale-110 transition-all duration-300 flex items-center gap-2 ${
              isScrolled ? 'text-indigo-600' : 'text-cyan-300'
            }`}
          >
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            Arpita Raj
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold hover:-translate-y-1 transition-all duration-300 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <Button 
              className="ml-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
              onClick={() => window.open('/resume/arpita-raj-resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200'
                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
            }`}
          >
            {isMenuOpen ? 
              <X className={`w-6 h-6 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} /> : 
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-indigo-600 font-semibold p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl w-full"
                onClick={() => window.open('/resume/arpita-raj-resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;