
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, GraduationCap } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Teachers', href: '/teachers', current: location.pathname === '/teachers' },
    { name: 'Students', href: '/students', current: location.pathname === '/students' },
    { name: 'News', href: '/news', current: location.pathname === '/news' },
    { name: 'Donate', href: '/donate', current: location.pathname === '/donate' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                CBC360
              </span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'border-green-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'bg-green-50 dark:bg-green-900 border-green-500 text-green-700 dark:text-green-200'
                    : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
