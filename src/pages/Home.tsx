
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Heart, TrendingUp, ArrowRight, GraduationCap, Award, MapPin } from 'lucide-react';
import Button from '@/components/ui/button-variants';
import { Card, CardHeader, CardContent } from '@/components/ui/card-component';

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Teacher Training',
      description: 'Comprehensive CBC training programs with certification in Mastery-based learning, Technology Integration, and more.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Curriculum-aligned materials for all grades from Pre-primary to Senior Secondary.',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Heart,
      title: 'Student Support',
      description: 'Financial assistance programs for needy students and schools.',
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: TrendingUp,
      title: 'Policy Updates',
      description: 'Timely information from TSC, MOE, and KRA to keep educators informed.',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const stats = [
    { number: '47', label: 'Counties Reached', icon: MapPin },
    { number: '5K+', label: 'Teachers Trained', icon: Users },
    { number: '200+', label: 'Schools Supported', icon: GraduationCap },
  ];

  const steps = [
    {
      step: '1',
      title: 'Teachers Register',
      description: 'Educators sign up using their TSC credentials and pay a small registration fee (Ksh500) that goes to county education offices.'
    },
    {
      step: '2',
      title: 'Access Training',
      description: 'Teachers join virtual training sessions during school holidays or access recorded sessions.'
    },
    {
      step: '3',
      title: 'County Groups',
      description: 'Teachers are added to county-specific WhatsApp groups for collaboration.'
    },
    {
      step: '4',
      title: 'Earn Certification',
      description: 'After completing training modules, teachers receive certificates from MOE offices.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Transforming Education in{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Kenya
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Supporting the successful implementation of CBC across all 47 counties
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/teachers">
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                    I'm a Teacher
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Support Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            CBC360 was created to empower teachers and inspire students during Kenya's transition from the 8-4-4 system to the 2-6-3-3 CBC curriculum. We bridge the gap between policy and classroom implementation.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-green-200" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How CBC360 Works */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How CBC360 Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              CBC360 is making a difference across Kenya's education system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Improved Teaching</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Teachers report better understanding of CBC methodologies after our training.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Reduced Dropouts</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Schools in our program see fewer student dropouts due to our support systems.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Better Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  County WhatsApp groups have increased teacher collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Movement</h2>
          <p className="text-xl text-green-100 mb-8">
            Be part of Kenya's educational transformation. Register today or support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/teachers">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
                I'm a Teacher
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-green-700 w-full sm:w-auto">
                Support Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
