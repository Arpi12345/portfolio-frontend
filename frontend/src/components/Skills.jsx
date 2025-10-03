import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Database, Cloud, Wrench, Globe, Cpu, Zap, Star } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      items: skills.languages,
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'Frontend',
      icon: Globe,
      items: skills.frontend,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Backend',
      icon: Cpu,
      items: skills.backend,
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Database',
      icon: Database,
      items: skills.database,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Tools',
      icon: Wrench,
      items: skills.tools,
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'Cloud & AI',
      icon: Cloud,
      items: skills.cloud,
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-300 to-blue-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            A vibrant toolkit spanning the full development spectrum, from dynamic interfaces to scalable cloud solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`bg-gradient-to-br ${category.bgGradient} border-2 ${category.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 group overflow-hidden relative`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.items.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center py-3 px-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:translate-x-2 group/skill"
                        style={{
                          animationDelay: `${(index * 150) + (skillIndex * 75)}ms`
                        }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 group-hover/skill:scale-125 transition-transform duration-200`}></div>
                        <span className="text-gray-700 font-semibold group-hover/skill:text-gray-900 transition-colors duration-200">
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

        {/* Animated Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '18+', label: 'GCP Badges', color: 'from-blue-500 to-cyan-500' },
            { number: '5+', label: 'Projects', color: 'from-green-500 to-teal-500' },
            { number: '3+', label: 'Years Learning', color: 'from-purple-500 to-pink-500' },
            { number: '100%', label: 'Dedication', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold text-lg group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;