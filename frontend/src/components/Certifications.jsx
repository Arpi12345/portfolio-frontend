import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Cloud, Award, ExternalLink, Brain, Database, Cog, BarChart3 } from 'lucide-react';
import { certifications } from '../data/mock';

const Certifications = () => {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'AI/ML':
        return Brain;
      case 'Generative AI':
        return Brain;
      case 'MLOps':
        return Cog;
      case 'GCP Services':
        return Cloud;
      case 'Data & Analytics':
        return BarChart3;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Professional certifications and continuous learning achievements in cloud computing and AI technologies.
          </p>
        </div>

        {/* Google Cloud Skills Boost */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <Cloud className="w-12 h-12 text-blue-600" />
              <h3 className="text-3xl font-light text-black">
                Google Cloud Skills Boost
              </h3>
            </div>
            <div className="text-6xl font-light text-black mb-2">
              {certifications.googleCloud.totalBadges}+
            </div>
            <p className="text-lg text-gray-600 font-light">
              Professional Badges Earned
            </p>
          </div>

          {/* Badge Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certifications.googleCloud.categories.map((category, index) => {
              const IconComponent = getCategoryIcon(category.name);
              return (
                <Card 
                  key={category.name}
                  className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-medium text-black mb-2">
                      {category.name}
                    </h4>
                    
                    <div className="text-3xl font-light text-black mb-3">
                      {category.badges}
                    </div>
                    
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View Profile Button */}
          <div className="text-center">
            <Button 
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open(certifications.googleCloud.profileUrl, '_blank')}
            >
              <Cloud className="w-5 h-5 mr-2" />
              View Google Cloud Profile
            </Button>
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <h3 className="text-2xl font-light text-black mb-8 text-center">
            Professional Development
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {certifications.other.map((cert, index) => (
              <Card 
                key={cert.name}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mb-6"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-6 h-6 text-gray-600" />
                        <h4 className="text-xl font-medium text-black">
                          {cert.name}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="font-medium">{cert.issuer}</span>
                        <Badge variant="secondary" className="bg-gray-100">
                          {cert.year}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 font-light leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;