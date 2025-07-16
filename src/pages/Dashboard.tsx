
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Database, Zap, Palette, ArrowRight, Github } from 'lucide-react';
import Button from '@/components/ui/button-variants';
import { Card, CardHeader, CardContent } from '@/components/ui/card-component';

const Dashboard: React.FC = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with an intuitive interface.',
      link: '/tasks',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Database,
      title: 'API Integration',
      description: 'Explore data from external APIs with search and pagination.',
      link: '/api',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Palette,
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      link: '#',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Zap,
      title: 'Responsive Design',
      description: 'Optimized for all devices - mobile, tablet, and desktop.',
      link: '#',
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const technologies = [
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'React Router',
    'Vite',
    'Lucide Icons'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TaskFlow
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A modern React application showcasing component architecture, state management, 
              API integration, and responsive design with Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tasks">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Managing Tasks
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/api">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore API Data
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Features & Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built with modern web technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      {feature.link !== '#' && (
                        <Link to={feature.link}>
                          <Button variant="secondary" size="sm">
                            Try it out
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built With Modern Tech
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Leveraging the latest tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <Github className="h-12 w-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Open Source & Educational
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This project demonstrates React best practices, modern development patterns, 
                and responsive design principles. Perfect for learning and reference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tasks">
                  <Button>Get Started</Button>
                </Link>
                <a
                  href="https://github.com"
                  className="inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    View Source Code
                    <Github className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
