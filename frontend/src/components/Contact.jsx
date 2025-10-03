import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Github, ExternalLink, Cloud, MapPin, Send } from 'lucide-react';
import { profileData } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      description: 'Best way to reach me'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profileData.phone,
      href: `tel:${profileData.phone}`,
      description: 'Available for calls'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Arpi12345',
      href: profileData.github,
      description: 'View my code'
    },
    {
      icon: Cloud,
      label: 'Google Cloud',
      value: 'Skills Boost Profile',
      href: profileData.cloudProfile,
      description: 'Certification badges'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ready to collaborate on your next project? I'm always interested in discussing new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-light text-black mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.label}
                    className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-black mb-1">
                            {info.label}
                          </h4>
                          <p className="text-gray-600 font-light mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                        
                        <Button 
                          variant="ghost"
                          size="sm"
                          className="hover:bg-gray-100"
                          onClick={() => window.open(info.href, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 font-light">
                      Patna, India
                    </p>
                    <p className="text-sm text-gray-500">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light text-black mb-8">
              Send a Message
            </h3>
            
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="border-gray-200 focus:border-black transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-200 focus:border-black transition-colors duration-200"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry, job opportunity, etc."
                      required
                      className="border-gray-200 focus:border-black transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className="border-gray-200 focus:border-black transition-colors duration-200 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;