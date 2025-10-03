import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Academic foundation in computer applications and technology, building the groundwork for professional excellence.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
            
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="relative mb-12 last:mb-0"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Education Card */}
                <Card className="ml-0 md:ml-20 bg-gray-50 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="p-3 bg-white rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-black mb-2 group-hover:text-gray-700 transition-colors duration-200">
                          {edu.degree}
                        </h3>
                        
                        <div className="text-gray-600 font-medium mb-2">
                          {edu.institution}
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-light text-black mb-8">
            Academic Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light text-black mb-2">BCA</div>
              <div className="text-gray-600 font-medium">Computer Applications</div>
              <div className="text-sm text-gray-500 mt-1">67% Grade</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-light text-black mb-2">3+</div>
              <div className="text-gray-600 font-medium">Years of Study</div>
              <div className="text-sm text-gray-500 mt-1">Technical Focus</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-light text-black mb-2">2024</div>
              <div className="text-gray-600 font-medium">Continued Learning</div>
              <div className="text-sm text-gray-500 mt-1">Delta Program</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;