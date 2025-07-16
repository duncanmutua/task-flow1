
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card-component';
import Button from '@/components/ui/button-variants';
import { Heart, Copy, Smartphone, Users, BookOpen, Utensils, Building } from 'lucide-react';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState('500');
  const [customAmount, setCustomAmount] = useState('');
  const [copied, setCopied] = useState(false);

  const suggestionAmounts = ['100', '500', '1000', '5000'];
  const tillNumber = '+254757236138';

  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Learning Materials',
      description: 'Provides textbooks and resources for 5 students',
      amount: 'Ksh 100',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      title: 'Teacher Training',
      description: 'Supports CBC training for 1 teacher',
      amount: 'Ksh 500',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Utensils,
      title: 'School Meals',
      description: 'Provides lunches for 10 students for a week',
      amount: 'Ksh 1,000',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'Helps improve school facilities',
      amount: 'Ksh 5,000',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const copyTillNumber = () => {
    navigator.clipboard.writeText(tillNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Support Education in Kenya</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your donation helps provide resources for teachers and financial support for needy students
            </p>
          </div>
        </div>
      </div>

      {/* M-Pesa Donation Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <div className="text-center">
                <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">M-Pesa Donation</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Make instant donations via M-Pesa to support CBC360 initiatives
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* M-Pesa Instructions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    How to Donate via M-Pesa:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Go to M-Pesa Menu</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Select Lipa na M-Pesa on your phone
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Enter Paybill Number</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Use 247247 as the Paybill number
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Enter Account Number</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Use CBC360 as the account name
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Enter Amount</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Input the amount you wish to donate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Donate Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Donate via Till Number:
                  </h3>
                  <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-800 dark:text-green-200">
                        {tillNumber}
                      </span>
                      <Button
                        size="sm"
                        onClick={copyTillNumber}
                        className={`${copied ? 'bg-green-600' : 'bg-blue-600'} hover:bg-blue-700`}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        {copied ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      You'll receive a confirmation message from M-Pesa
                    </p>
                  </div>

                  {/* Suggested Amounts */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Suggested Donations:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {suggestionAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            selectedAmount === amount
                              ? 'bg-green-600 text-white border-green-600'
                              : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                          }`}
                        >
                          <div className="font-bold">Ksh {amount}</div>
                        </button>
                      ))}
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Donation Makes a Difference
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how your contribution directly impacts education in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} hover>
                <CardContent className="p-6 text-center">
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${area.color} inline-block mb-4`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {area.amount}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Impact Stories
          </h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Success story"
                    className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Mwalimu Primary School, Kakamega
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-3">
                      "Thanks to CBC360's support, our teachers are now confident in delivering CBC curriculum. 
                      Student engagement has increased by 60% and we've seen remarkable improvement in learning outcomes."
                    </p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      - Headteacher Mary Shikuku
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Success story"
                    className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      St. Joseph Secondary School, Nyeri
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-3">
                      "The scholarship program enabled 15 of our needy students to continue their education. 
                      These students are now excelling and have become role models in our community."
                    </p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      - Principal Peter Kamau
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Transparency */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Transparency & Accountability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Direct Programs</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Of donations go directly to educational programs and student support
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Operations</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Used for platform maintenance and technology infrastructure
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5%</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Administration</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Covers minimal administrative costs and financial management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
