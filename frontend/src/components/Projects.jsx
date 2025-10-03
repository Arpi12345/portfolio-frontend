import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Star, Rocket, Eye, ArrowRight } from 'lucide-react';
import { projects } from '../data/mock';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projectImages = {
    1: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=300&fit=crop',
    2: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop', 
    3: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop',
    4: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
    5: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop'
  };

  const ProjectCard = ({ project, featured = false }) => {
    const cardGradients = [
      'from-blue-500/10 to-purple-600/10',
      'from-indigo-500/10 to-purple-500/10', 
      'from-purple-500/10 to-pink-500/10',
      'from-blue-600/10 to-indigo-500/10',
      'from-indigo-600/10 to-purple-600/10'
    ];
    
    const borderGradients = [
      'from-blue-500 to-purple-600',
      'from-indigo-500 to-purple-600',
      'from-purple-600 to-pink-500', 
      'from-blue-600 to-indigo-500',
      'from-indigo-600 to-purple-600'
    ];
    
    const cardIndex = (project.id - 1) % cardGradients.length;
    
    return (
      <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 border-0 bg-white overflow-hidden relative cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}>
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${borderGradients[cardIndex]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 rounded-lg`}>
          <div className="w-full h-full bg-white rounded-lg"></div>
        </div>
        
        <div className="relative z-10 bg-white m-0.5 rounded-lg overflow-hidden">
          {/* Project Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={projectImages[project.id] || projectImages[1]} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${cardGradients[cardIndex]} group-hover:from-transparent transition-all duration-300`}></div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                onClick={() => openProjectModal(project)}
                className="bg-white/90 text-gray-800 hover:bg-white font-semibold px-6 py-3 rounded-xl backdrop-blur-sm transform scale-95 group-hover:scale-100 transition-all duration-300"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
            
            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold">Featured</span>
                </div>
              </div>
            )}
          </div>

          <CardContent className="p-6">
            {/* Project Title */}
            <div className="flex items-start justify-between mb-4">
              <h3 className={`font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 ${featured ? 'text-2xl' : 'text-xl'}`}>
                {project.title}
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech, index) => (
                  <span 
                    key={tech}
                    className="skill-pill text-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-sm text-gray-500 font-medium px-2 py-1">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all duration-300 flex-1 font-semibold"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, '_blank');
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              
              {project.live ? (
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${borderGradients[cardIndex]} hover:from-purple-600 hover:to-pink-500 text-white transition-all duration-300 flex-1 font-semibold`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.live, '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              ) : (
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white flex-1 font-semibold"
                  onClick={() => openProjectModal(project)}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    );
  };

  return (
    <>
      <section id="projects" className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl animate-float delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Featured Work
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Interactive showcase of my development projects. Click on any project to explore detailed information, challenges, and learnings.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-indigo-400 fill-current" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Highlighted Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Additional Projects
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
                  Explore More Projects on GitHub
                </p>
              </div>
              <Button 
                className="border-2 border-indigo-500 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:border-transparent px-10 py-4 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 glow-effect"
                onClick={() => window.open('https://github.com/Arpi12345', '_blank')}
              >
                <Github className="w-6 h-6 mr-3" />
                View GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Projects;