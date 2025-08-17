import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 'programming-java-nptel',
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: '2024',
      category: 'Programming',
      description: 'Comprehensive Java programming course covering object-oriented programming concepts, data structures, and software development practices.',
      skills: ['Java Programming', 'Object-Oriented Programming', 'Data Structures', 'Software Development'],
      link: 'https://drive.google.com/file/d/1_WzKEgfEGMnYcqtePjykBfO4_zLAPizg/view?usp=drive_link',
      color: 'blue',
      icon: '☕'
    },
    {
      id: 'python-data-science-nptel',
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      date: '2024',
      category: 'Data Science',
      description: 'Python programming for data science applications including data analysis, visualization, and machine learning fundamentals.',
      skills: ['Python Programming', 'Data Analysis', 'Data Visualization', 'Machine Learning'],
      link: 'https://drive.google.com/file/d/10SIvlFZo4IqEYuISj80Szr0wVEyL2JZ2/view?usp=drive_link',
      color: 'green',
      icon: '🐍'
    },
    {
      id: 'wazuh-siem-challenge',
      title: 'Wazuh SIEM Challenge',
      issuer: 'Haxcamp',
      date: '2024',
      category: 'Cybersecurity',
      description: 'Hands-on challenge demonstrating proficiency in Wazuh SIEM implementation, log analysis, and security monitoring.',
      skills: ['Wazuh SIEM', 'Log Analysis', 'Security Monitoring', 'Threat Detection'],
      link: 'https://drive.google.com/file/d/14qbycyWFyfIaE-F3utPubv-x1mviTqYt/view?usp=drive_link',
      color: 'red',
      icon: '🛡️'
    },
    {
      id: 'wireshark-challenge',
      title: 'Wireshark Challenge',
      issuer: 'Haxcamp',
      date: '2024',
      category: 'Cybersecurity',
      description: 'Network analysis challenge using Wireshark for packet capture, protocol analysis, and network troubleshooting.',
      skills: ['Wireshark', 'Network Analysis', 'Packet Capture', 'Protocol Analysis'],
      link: 'https://drive.google.com/file/d/1b71Amm9X6cZR6u_QgiztFA005Q9T_Ai3/view?usp=drive_link',
      color: 'purple',
      icon: '🔍'
    }
  ];

  const colorClasses = {
    red: 'border-red-500/30 bg-red-500/10 text-red-400',
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    green: 'border-green-500/30 bg-green-500/10 text-green-400',
    purple: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    yellow: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
    cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
  };

  const categories = [...new Set(certificates.map(cert => cert.category))];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-orange-400">DIGITAL</span>
            <span className="text-white ml-2">CREDENTIALS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="px-4 py-2 bg-gray-900/50 border border-orange-500/30 rounded-full backdrop-blur-sm"
            >
              <span className="text-orange-400 font-mono text-sm">{category}</span>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative"
            >
              <div className={`relative bg-gray-900/50 border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${
                colorClasses[cert.color as keyof typeof colorClasses]
              }`}>
                {/* Certificate Icon */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-2xl ${
                    colorClasses[cert.color as keyof typeof colorClasses]
                  }`}>
                    {cert.icon}
                  </div>
                  <Award className="w-6 h-6 text-orange-400" />
                </div>

                {/* Certificate Info */}
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs font-mono text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg font-orbitron font-bold hover:from-orange-500 hover:to-red-600 transition-all duration-300 w-full justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW CERTIFICATE</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-orange-400 mb-2">
              {certificates.length}
            </div>
            <div className="text-gray-400 font-mono text-sm">CERTIFICATES</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-cyan-400 mb-2">
              {categories.length}
            </div>
            <div className="text-gray-400 font-mono text-sm">DOMAINS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">
              2024
            </div>
            <div className="text-gray-400 font-mono text-sm">LATEST YEAR</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-purple-400 mb-2">
              100%
            </div>
            <div className="text-gray-400 font-mono text-sm">VERIFIED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;