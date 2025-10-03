import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Cloud, Award, ExternalLink, Brain, Database, Cog, BarChart3, Sparkles } from 'lucide-react';
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
    <section id="certifications" className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl animate-bounce delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Professional achievements and continuous learning in cutting-edge cloud computing and AI technologies.
          </p>
        </div>

        {/* Google Cloud Skills Boost */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <Cloud className="w-12 h-12 text-indigo-500" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Google Cloud Skills Boost
              </h3>
            </div>
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              {certifications.googleCloud.totalBadges}+
            </div>
            <p className="text-lg text-gray-600 font-medium">
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
                  className="bg-white border-2 border-indigo-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group overflow-hidden relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {category.name}
                    </h4>
                    
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3">
                      {category.badges}
                    </div>
                    
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
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
              className="border-2 border-indigo-500 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:border-transparent px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              onClick={() => window.open(certifications.googleCloud.profileUrl, '_blank')}
            >
              <Cloud className="w-5 h-5 mr-2" />
              View Google Cloud Profile
            </Button>
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
            Professional Development
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {certifications.other.map((cert, index) => (
              <Card 
                key={cert.name}
                className="bg-white border-2 border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1 mb-6 group overflow-hidden relative"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-600 transition-all duration-300">
                          <Award className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                          {cert.name}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="font-semibold text-indigo-600">{cert.issuer}</span>
                        <Badge variant="secondary" className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
                          {cert.year}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 font-medium leading-relaxed">
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