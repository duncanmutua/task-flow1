
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card-component';
import Button from '@/components/ui/button-variants';
import { BookOpen, Download, Play, Search, Filter, Star } from 'lucide-react';

const Students: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState('Grade 7-9 (JSS)');
  const [searchTerm, setSearchTerm] = useState('');

  const grades = [
    'Pre-Primary',
    'Grade 1-3 (Lower Primary)',
    'Grade 4-6 (Upper Primary)',
    'Grade 7-9 (JSS)',
    'Grade 10-12 (Senior Secondary)'
  ];

  const subjects = [
    {
      name: 'Mathematics',
      resources: ['Notes', 'Quizzes', 'Videos'],
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    },
    {
      name: 'English',
      resources: ['Notes', 'Set Books', 'Videos'],
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    },
    {
      name: 'Kiswahili',
      resources: ['Notes', 'Set Books', 'Videos'],
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    },
    {
      name: 'Science',
      resources: ['Notes', 'Experiments', 'Videos'],
      color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    },
    {
      name: 'Social Studies',
      resources: ['Notes', 'Maps', 'Videos'],
      color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    },
    {
      name: 'Creative Arts',
      resources: ['Projects', 'Tutorials', 'Videos'],
      color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    }
  ];

  const featuredResources = [
    {
      title: 'Junior Secondary Mathematics Notes',
      description: 'Comprehensive notes covering all topics in Grade 7-9 CBC Mathematics curriculum.',
      downloads: 1245,
      rating: 98,
      type: 'PDF',
      size: '5.2 MB'
    },
    {
      title: 'English Set Books Guide',
      description: 'Complete analysis and study guides for CBC English set books.',
      downloads: 890,
      rating: 95,
      type: 'PDF',
      size: '3.8 MB'
    },
    {
      title: 'Science Experiments Video Series',
      description: 'Step-by-step science experiments aligned with CBC curriculum.',
      downloads: 2100,
      rating: 97,
      type: 'Video',
      size: '250 MB'
    }
  ];

  const supportPrograms = [
    {
      title: 'Scholarship Program',
      description: 'Financial assistance for bright but needy students',
      eligibility: 'Form 1-4 students with excellent grades',
      amount: 'Ksh 20,000 - 50,000 per year'
    },
    {
      title: 'Learning Materials Support',
      description: 'Free textbooks and learning materials',
      eligibility: 'Students from low-income families',
      amount: 'Complete set of textbooks'
    },
    {
      title: 'Digital Learning Access',
      description: 'Free internet and device access for online learning',
      eligibility: 'All registered students',
      amount: 'Unlimited access'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Learning Resources</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Access curriculum-aligned materials, study guides, and educational content for all CBC grades
            </p>
          </div>
        </div>
      </div>

      {/* Grade Selection & Search */}
      <div className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Grade:
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search Resources:
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by subject or topic..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {selectedGrade}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {subject.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${subject.color}`}>
                      {subject.resources.length} Resources
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {subject.resources.map((resource, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <BookOpen className="h-4 w-4 mr-2" />
                        {resource}
                      </div>
                    ))}
                  </div>
                  <Button size="sm" className="w-full">
                    View Resources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{resource.rating}% positive</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {resource.type} • {resource.size}
                    </span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Student Support Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Support Programs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Financial assistance and resources for students in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPrograms.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {program.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Eligibility: </span>
                      <span className="text-gray-600 dark:text-gray-300">{program.eligibility}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Support: </span>
                      <span className="text-gray-600 dark:text-gray-300">{program.amount}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Study Tips */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">CBC Study Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Focus on Competencies</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                CBC emphasizes what you can do with knowledge. Practice applying concepts to real-world situations.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Continuous Assessment</h3>
              <p className="text-green-800 dark:text-green-200 text-sm">
                Keep track of your progress throughout the term. CBC values consistent performance over final exams.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Collaborative Learning</h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm">
                Work with peers on projects. CBC encourages teamwork and communication skills.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900 rounded-lg p-6">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Digital Learning</h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm">
                Use technology for research and presentations. Digital literacy is a key CBC competency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
