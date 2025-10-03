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
      'from-blue-500/20 to-purple-600/20',
      'from-indigo-500/20 to-purple-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-blue-600/20 to-indigo-500/20',
      'from-indigo-600/20 to-purple-600/20'
    ];
    
    const borderGradients = [
      'from-blue-500 to-purple-600',
      'from-indigo-500 to-purple-600',
      'from-purple-600 to-pink-500',
      'from-blue-600 to-indigo-500',
      'from-indigo-600 to-purple-600'
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
                  <h3 className={`font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 ${
                    featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  {featured && (
                    <div className="flex items-center gap-1">
                      <Star className="w-6 h-6 text-indigo-400 fill-current animate-pulse" />
                      <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">Featured</span>
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
                    'bg-indigo-100 text-indigo-700 border-indigo-200',
                    'bg-purple-100 text-purple-700 border-purple-200',
                    'bg-pink-100 text-pink-700 border-pink-200',
                    'bg-violet-100 text-violet-700 border-violet-200'
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
                className="border-2 border-indigo-500 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex-1 font-semibold hover:scale-105"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              {project.live && (
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${borderGradients[cardIndex]} hover:from-purple-600 hover:to-pink-500 text-white hover:shadow-xl transition-all duration-300 flex-1 font-semibold hover:scale-105`}
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
    <section id="projects" className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Featured Work
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            A showcase of innovative projects highlighting my expertise in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-indigo-400 fill-current" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 border border-indigo-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl animate-bounce">
                <Github className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl text-gray-700 font-bold">
                Want to explore more innovative projects?
              </p>
            </div>
            <Button 
              variant="outline"
              className="border-2 border-indigo-500 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:border-transparent px-10 py-4 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              onClick={() => window.open('https://github.com/Arpi12345', '_blank')}
            >
              <Github className="w-6 h-6 mr-3" />
              Explore My GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;