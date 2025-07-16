import React, { useState, useEffect } from 'react';
import { Github, Linkedin, MessageCircle, Activity, Eye } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const getVisitorCount = () => {
      const stored = localStorage.getItem('portfolio-visitor-count');
      const lastVisit = localStorage.getItem('portfolio-last-visit');
      const today = new Date().toDateString();
      
      if (lastVisit !== today) {
        // New visitor or returning after a day
        const newCount = stored ? parseInt(stored) + 1 : 1;
        localStorage.setItem('portfolio-visitor-count', newCount.toString());
        localStorage.setItem('portfolio-last-visit', today);
        return newCount;
      }
      
      return stored ? parseInt(stored) : 1;
    };

    // Simulate realistic visitor count with base number
    const baseCount = 1247; // Starting base count
    const actualCount = getVisitorCount();
    setVisitorCount(baseCount + actualCount);
  }, []);
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/JEEVAN2710', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'http://www.linkedin.com/in/jeevanpatil27', color: 'hover:text-blue-400' },
    { icon: MessageCircle, label: 'Contact', href: 'mailto:patiljeevan2710@gmail.com', color: 'hover:text-cyan-400' }
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Status Bar */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-400 font-mono text-sm">SYSTEM ACTIVE</span>
            </div>
            <div className="text-gray-400 font-mono text-sm">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-gray-400 ${link.color} transition-colors duration-300 flex items-center space-x-2`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
                <span className="hidden sm:inline font-mono text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Terminal-style Availability Status */}
        <div className="mt-6 bg-gray-900/80 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-xs">terminal@jeevan-portfolio:~$</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400">
              <span className="text-cyan-400">$</span> status --availability
            </div>
            <div className="text-gray-300 pl-2">
              <span className="text-green-400">●</span> AVAILABLE FOR INTERNSHIPS
            </div>
            <div className="text-gray-300 pl-2">
              <span className="text-green-400">●</span> OPEN TO COLLABORATION
            </div>
            <div className="text-gray-300 pl-2">
              <span className="text-yellow-400">●</span> SEEKING OPPORTUNITIES IN: Web Dev | Android | AI/ML
            </div>
            <div className="text-cyan-400 mt-2">
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>

        {/* Terminal Quote */}
        <div className="mt-8 text-center">
          <div className="text-gray-500 font-mono text-sm">
            <span className="text-cyan-400">// </span>
            End of Transmission
            <span className="text-cyan-400"> //</span>
          </div>
          <div className="mt-2 text-gray-600 font-mono text-xs">
            Jeevan Patil Portfolio v1.0 | Built with React & TypeScript
          </div>
          
          {/* Visitor Counter */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500">
            <Eye className="w-4 h-4" />
            <span className="font-mono text-xs">
              INTRUDERS: <span className="text-red-400 font-bold">{visitorCount.toLocaleString()}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;