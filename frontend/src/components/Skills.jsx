import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Database, Cloud, Wrench, Globe, Cpu } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      items: skills.languages,
      color: 'bg-gray-50'
    },
    {
      title: 'Frontend',
      icon: Globe,
      items: skills.frontend,
      color: 'bg-gray-50'
    },
    {
      title: 'Backend',
      icon: Cpu,
      items: skills.backend,
      color: 'bg-gray-50'
    },
    {
      title: 'Database',
      icon: Database,
      items: skills.database,
      color: 'bg-gray-50'
    },
    {
      title: 'Tools',
      icon: Wrench,
      items: skills.tools,
      color: 'bg-gray-50'
    },
    {
      title: 'Cloud & AI',
      icon: Cloud,
      items: skills.cloud,
      color: 'bg-gray-50'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A comprehensive toolkit spanning the full development stack, from frontend interfaces to cloud infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`${category.color} border-0 shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white rounded-lg mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-black">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.items.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center py-2 px-3 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 hover:translate-x-1"
                        style={{
                          animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                        }}
                      >
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-2">18+</div>
            <div className="text-gray-600 font-medium">GCP Badges</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-2">5+</div>
            <div className="text-gray-600 font-medium">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-2">3+</div>
            <div className="text-gray-600 font-medium">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-2">100%</div>
            <div className="text-gray-600 font-medium">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;