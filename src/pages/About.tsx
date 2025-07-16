import React from 'react';
import { Card, CardContent } from '@/components/ui/card-component';
import { Target, Users, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Duncan Mutua',
      role: 'Founder & CEO', 
      bio: 'University of Nairobi Graduate Teacher of Mathematics and Geography.',
      image: '/placeholder.svg'
    },
    {
      name: 'Prof. John Kiprotich',
      role: 'Head of Training',
      bio: 'Education researcher and CBC implementation expert.',
      image: '/placeholder.svg'
    },
    {
      name: 'Mary Nyong\'o',
      role: 'Operations Director',
      bio: 'Former TSC officer with extensive field experience.',
      image: '/placeholder.svg'
    }
  ];

  const milestones = [
    { year: '2021', event: 'CBC360 founded to support curriculum transition' },
    { year: '2022', event: 'First 1,000 teachers trained across 10 counties' },
    { year: '2023', event: 'Expanded to all 47 counties in Kenya' },
    { year: '2024', event: 'Launched digital learning resources platform' },
    { year: '2025', event: '5,000+ teachers trained, 200+ schools supported' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About CBC360</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering educators and transforming lives through Kenya's CBC curriculum implementation
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  To bridge the gap between CBC policy and classroom implementation by providing comprehensive training, resources, and support to educators across all 47 counties in Kenya.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  A Kenya where every child receives quality education through well-trained teachers who are confident and competent in delivering the CBC curriculum effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-6">
              CBC360 was born out of a critical need observed during Kenya's transition from the 8-4-4 education system to the 2-6-3-3 Competency-Based Curriculum (CBC). While the policy framework was well-designed, many teachers struggled with practical implementation due to limited training and resources.
            </p>
            <p className="mb-6">
              Founded in 2021 by a team of education professionals, CBC360 recognized that successful curriculum implementation requires more than policy documents—it requires well-trained, confident teachers who understand both the 'what' and the 'how' of CBC delivery.
            </p>
            <p>
              Today, we've grown from a small initiative to a nationwide movement, supporting thousands of teachers and hundreds of schools across all 47 counties in Kenya. Our impact extends beyond training to include resource development, policy updates, and direct student support.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">info@cbc360.org.ke</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+254 757 236138</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
