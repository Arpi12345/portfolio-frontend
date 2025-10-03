import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-50 ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className={`font-medium text-black group-hover:text-gray-700 transition-colors duration-200 ${
                featured ? 'text-xl' : 'text-lg'
              }`}>
                {project.title}
              </h3>
              {featured && (
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              )}
            </div>
            <p className="text-gray-600 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-white text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex-1"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          {project.live && (
            <Button 
              size="sm"
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 flex-1"
              onClick={() => window.open(project.live, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A selection of projects showcasing my expertise in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-black mb-8">Featured Projects</h3>
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
            <h3 className="text-2xl font-light text-black mb-8">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6 font-light">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/Arpi12345', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;