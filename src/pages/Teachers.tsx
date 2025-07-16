
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card-component';
import Button from '@/components/ui/button-variants';
import { Users, Award, Clock, CheckCircle, BookOpen, Video, Download } from 'lucide-react';

const Teachers: React.FC = () => {
  const [selectedCounty, setSelectedCounty] = useState('');

  const trainingModules = [
    {
      title: 'CBC Fundamentals',
      duration: '4 hours',
      description: 'Understanding the 2-6-3-3 structure and competency-based approach',
      status: 'Available',
      certificate: true
    },
    {
      title: 'Assessment Strategies',
      duration: '3 hours',
      description: 'Formative and summative assessment in CBC',
      status: 'Available',
      certificate: true
    },
    {
      title: 'Technology Integration',
      duration: '5 hours',
      description: 'Using digital tools to enhance CBC delivery',
      status: 'Available',
      certificate: true
    },
    {
      title: 'Special Needs Education',
      duration: '6 hours',
      description: 'Inclusive education practices in CBC',
      status: 'Coming Soon',
      certificate: true
    }
  ];

  const counties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Kitale',
    'Garissa', 'Kakamega', 'Machakos', 'Meru', 'Nyeri', 'Kericho', 'Embu', 'Migori'
  ];

  const resources = [
    {
      title: 'CBC Curriculum Designs',
      type: 'PDF',
      downloads: 2340,
      size: '2.5 MB'
    },
    {
      title: 'Assessment Rubrics',
      type: 'Excel',
      downloads: 1890,
      size: '1.2 MB'
    },
    {
      title: 'Lesson Plan Templates',
      type: 'Word',
      downloads: 3200,
      size: '800 KB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Teacher Training & Resources</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Comprehensive CBC training programs with certification and ongoing support
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Register for Training
            </Button>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Teacher Registration</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Join thousands of teachers transforming education in Kenya
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    TSC Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your TSC number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    County
                  </label>
                  <select
                    value={selectedCounty}
                    onChange={(e) => setSelectedCounty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select your county</option>
                    {counties.map((county) => (
                      <option key={county} value={county}>{county}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    School Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your school name"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Register Now (Ksh 500)
                  </Button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                    Registration fee goes to county education offices
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Training Modules */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Training Modules</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive CBC training with certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {module.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      module.status === 'Available' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {module.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration}
                      {module.certificate && (
                        <>
                          <Award className="h-4 w-4 ml-3 mr-1" />
                          Certificate
                        </>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      disabled={module.status !== 'Available'}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {module.status === 'Available' ? 'Start Training' : 'Coming Soon'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Resources */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Teaching Resources</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Download curriculum-aligned materials and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Download className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {resource.downloads.toLocaleString()} downloads
                    </span>
                    <Button size="sm" variant="secondary">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What Teachers Say</h2>
          <div className="bg-green-50 dark:bg-green-900 rounded-lg p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
              "CBC360 transformed my understanding of the competency-based curriculum. The training was practical, relevant, and has made me a more effective teacher. My students are more engaged and learning better."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              - Grace Wanjiku, Primary School Teacher, Kiambu County
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
