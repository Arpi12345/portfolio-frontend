import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Code, Cloud, Award, MapPin } from 'lucide-react';
import { profileData } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BCA Graduate from LN Mishra Institute',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Tech Stack',
      description: 'MERN | React | Node.js | MongoDB',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Google Cloud',
      description: '18+ Professional Badges in AI/ML & GCP',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Passionate developer with a strong foundation in modern web technologies and cloud computing.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white shadow-2xl rounded-3xl border-0 overflow-hidden mb-12 hover:shadow-3xl transition-all duration-500">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Avatar Section */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {profileData.name}
                  </h3>
                  <p className="text-indigo-200 font-medium text-lg">
                    {profileData.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-indigo-200">
                    <MapPin className="w-4 h-4" />
                    <span>Patna, India</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-3 p-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    Hello! I'm a Full Stack Developer
                  </h4>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm passionate about creating innovative web solutions that make a difference. 
                    With expertise in the MERN stack and a strong foundation in cloud technologies, 
                    I love turning ideas into reality through clean, efficient code.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    My journey in technology is driven by curiosity and a commitment to continuous learning. 
                    With 18+ Google Cloud Skills Boost badges in AI/ML, MLOps, and GCP Services, 
                    I bring both theoretical knowledge and practical experience to every project.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I believe in writing clean, efficient code and creating user experiences that are 
                    both functional and delightful. Whether it's building a travel listing platform 
                    or exploring the latest in cloud technologies, I approach each challenge with 
                    enthusiasm and dedication.
                  </p>

                  {/* Skills Highlight */}
                  <div className="mt-8">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">
                      What I'm passionate about:
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {['React Development', 'Node.js APIs', 'MongoDB Design', 'Cloud Architecture', 'AI/ML Integration', 'UI/UX Design'].map((skill) => (
                        <span 
                          key={skill} 
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-indigo-700 rounded-full font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={highlight.title}
                className="bg-white shadow-lg hover:shadow-2xl border-0 rounded-2xl transition-all duration-300 hover:-translate-y-3 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${highlight.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;