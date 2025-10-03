import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Database, Cloud, Wrench, Globe, Cpu, Zap } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Java', level: 75 },
        { name: 'C', level: 70 },
        { name: 'SQL', level: 80 }
      ],
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      title: 'Frontend',
      icon: Globe,
      items: [
        { name: 'React.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Material UI', level: 75 }
      ],
      gradient: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      title: 'Backend',
      icon: Cpu,
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'EJS', level: 70 },
        { name: 'REST APIs', level: 80 }
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Database',
      icon: Database,
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 75 }
      ],
      gradient: 'from-pink-500 to-red-500',
      bgGradient: 'from-pink-50 to-red-50'
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      items: [
        { name: 'Google Cloud Platform', level: 90 },
        { name: 'Vertex AI', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'Redux', level: 75 }
      ],
      gradient: 'from-indigo-600 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Interactive showcase of my technical skills with proficiency levels and hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`bg-gradient-to-br ${category.bgGradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group overflow-hidden relative`}
                style={{
                  animationDelay: `${categoryIndex * 150}ms`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="group/skill"
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Name and Level */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-semibold group-hover/skill:text-indigo-600 transition-colors duration-200">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold px-2 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-white rounded-full h-3 overflow-hidden shadow-inner">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                            style={{
                              width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '6+', label: 'Programming Languages', color: 'from-blue-500 to-indigo-600' },
            { number: '10+', label: 'Frameworks & Libraries', color: 'from-indigo-500 to-purple-600' },
            { number: '18+', label: 'Cloud Certifications', color: 'from-purple-500 to-pink-500' },
            { number: '5+', label: 'Major Projects', color: 'from-pink-500 to-red-500' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold group-hover:text-indigo-600 transition-colors duration-300">
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