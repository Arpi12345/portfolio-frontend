import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Star, Rocket, Code2, Globe } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }) => {
    const cardGradients = [
      'from-blue-500/20 to-purple-500/20',
      'from-green-500/20 to-teal-500/20',
      'from-pink-500/20 to-red-500/20',
      'from-indigo-500/20 to-blue-500/20',
      'from-yellow-500/20 to-orange-500/20'
    ];
    
    const borderGradients = [
      'from-blue-400 to-purple-400',
      'from-green-400 to-teal-400',
      'from-pink-400 to-red-400',
      'from-indigo-400 to-blue-400',
      'from-yellow-400 to-orange-400'
    ];
    
    const cardIndex = project.id % cardGradients.length;
    
    return (
      <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 hover:rotate-1 border-0 bg-gradient-to-br ${cardGradients[cardIndex]} backdrop-blur-sm overflow-hidden relative ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}>
        {/* Animated Border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${borderGradients[cardIndex]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 rounded-lg`}>
          <div className="w-full h-full bg-white rounded-lg"></div>
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-2 h-2 bg-gradient-to-r ${borderGradients[cardIndex]} rounded-full animate-ping`}></div>
        </div>
        
        <div className="relative z-10 bg-white/90 backdrop-blur-sm m-0.5 rounded-lg">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 bg-gradient-to-r ${borderGradients[cardIndex]} rounded-lg`}>
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200 ${
                    featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  {featured && (
                    <div className="flex items-center gap-1">
                      <Star className="w-6 h-6 text-yellow-500 fill-current animate-pulse" />
                      <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Featured</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => {
                  const techColors = [
                    'bg-blue-100 text-blue-700 border-blue-200',
                    'bg-green-100 text-green-700 border-green-200',
                    'bg-purple-100 text-purple-700 border-purple-200',
                    'bg-pink-100 text-pink-700 border-pink-200',
                    'bg-indigo-100 text-indigo-700 border-indigo-200'
                  ];
                  return (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={`${techColors[index % techColors.length]} border hover:scale-105 transition-transform duration-200 font-semibold`}
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className={`border-2 border-gradient-to-r ${borderGradients[cardIndex]} text-gray-700 hover:bg-gradient-to-r hover:${borderGradients[cardIndex]} hover:text-white transition-all duration-300 flex-1 font-semibold hover:scale-105`}
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              {project.live && (
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${borderGradients[cardIndex]} text-white hover:shadow-xl transition-all duration-300 flex-1 font-semibold hover:scale-105`}
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    );
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
              Featured Work
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            A colorful showcase of projects highlighting my expertise in full-stack development and innovative web solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Featured Projects
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                featured={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                More Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-bounce">
                <Github className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl text-gray-700 font-bold">
                Want to see more amazing projects?
              </p>
            </div>
            <Button 
              variant="outline"
              className="border-2 border-purple-500 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white px-10 py-4 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              onClick={() => window.open('https://github.com/Arpi12345', '_blank')}
            >
              <Github className="w-6 h-6 mr-3" />
              Explore My GitHub Universe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;