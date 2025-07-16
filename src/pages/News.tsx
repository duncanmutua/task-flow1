
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card-component';
import Button from '@/components/ui/button-variants';
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Policy Updates', 'Training', 'Success Stories', 'Resources', 'Events'];

  const newsArticles = [
    {
      id: 1,
      title: 'New CBC Assessment Guidelines Released by MOE',
      excerpt: 'Ministry of Education announces updated assessment guidelines for the CBC curriculum, emphasizing competency-based evaluation methods.',
      content: 'The Ministry of Education has released comprehensive assessment guidelines that will help teachers better evaluate student competencies...',
      category: 'Policy Updates',
      author: 'MOE Communications',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'CBC360 Reaches 5,000 Teachers Milestone',
      excerpt: 'We celebrate training our 5,000th teacher in CBC methodologies, marking a significant milestone in educational transformation.',
      content: 'This milestone represents months of dedicated training sessions across all 47 counties...',
      category: 'Success Stories',
      author: 'CBC360 Team',
      date: '2025-01-12',
      readTime: '3 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Learning Resources Now Available',
      excerpt: 'New interactive digital learning materials for all CBC subjects are now available on our platform.',
      content: 'These new resources include interactive videos, quizzes, and downloadable materials...',
      category: 'Resources',
      author: 'Content Team',
      date: '2025-01-10',
      readTime: '4 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      title: 'TSC Announces New Teacher Development Programs',
      excerpt: 'Teachers Service Commission introduces new professional development opportunities aligned with CBC requirements.',
      content: 'The TSC has unveiled a comprehensive teacher development program that focuses on CBC competencies...',
      category: 'Policy Updates',
      author: 'TSC Communications',
      date: '2025-01-08',
      readTime: '6 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      title: 'Upcoming County Training Sessions for February',
      excerpt: 'Register now for our February CBC training sessions scheduled across multiple counties.',
      content: 'We are excited to announce our February training schedule covering advanced CBC methodologies...',
      category: 'Training',
      author: 'Training Team',
      date: '2025-01-05',
      readTime: '2 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 6,
      title: 'Student Success Story: From Struggling to Excelling',
      excerpt: 'How CBC360 support programs helped Mary Wanjiku excel in her studies and secure a scholarship.',
      content: 'Mary Wanjiku\'s journey from struggling student to scholarship recipient showcases the impact of our support programs...',
      category: 'Success Stories',
      author: 'Impact Team',
      date: '2025-01-03',
      readTime: '4 min read',
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Latest News & Updates</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay informed about CBC developments, policy updates, and educational news across Kenya
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover bg-gray-200"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <Button>Read Full Article</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Regular Articles Grid */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} hover className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover bg-gray-200"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      article.category === 'Policy Updates' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : article.category === 'Training'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : article.category === 'Success Stories'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button size="sm" variant="secondary">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Subscribe to our newsletter and never miss important updates about CBC implementation and educational news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;
