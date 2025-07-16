
import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Teacher Resources', href: '/teachers' },
    { name: 'Student Materials', href: '/students' },
    { name: 'Contact', href: '/about' },
  ];

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-2xl font-bold text-green-400">CBC360</span>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Supporting Kenya's educational transformation through the CBC curriculum.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-green-100">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@cbc360.org.ke</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 757 236138</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-800">
          <p className="text-center text-green-100">
            © {currentYear} CBC360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
