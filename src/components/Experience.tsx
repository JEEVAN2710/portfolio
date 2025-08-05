import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      year: 'Present',
      title: 'INTERN',
      company: 'HaxSecurity',
      location: 'Remote',
      description: 'Working on cybersecurity solutions and security automation tools. Contributing to vulnerability assessment and penetration testing workflows.',
      technologies: ['Cybersecurity', 'Security Automation', 'Vulnerability Assessment', 'Penetration Testing'],
      status: 'active'
    },
    {
      year: 'Jan 2024 - July 2024',
      title: 'JUNIOR MANAGER',
      company: 'AIESEC Global Sector',
      location: 'Navi Mumbai',
      description: 'Conducted cold calling and lead generation for international volunteering programs. Built international partnerships and managed applicant tracking workflows.',
      technologies: ['Lead Generation', 'Partnership Building', 'Communication', 'CRM'],
      status: 'completed'
    }
  ];

  const extracurricular = [
    {
      year: '2024 - Present',
      title: 'Vice Chairperson',
      company: 'GeeksforGeeks Student Chapter, BVDU',
      location: 'Navi Mumbai',
      description: 'Leading technical initiatives and organizing coding events for the student community. Managing chapter activities and fostering technical growth among peers.',
      technologies: ['Leadership', 'Event Management', 'Community Building', 'Technical Mentoring'],
      status: 'active',
      networkInfo: '127.0.0.1:8080'
    },
    {
      year: '2024 - Present',
      title: 'Discipline Head',
      company: 'NSS, BVDU',
      location: 'Navi Mumbai',
      description: 'Managing discipline and coordination activities for National Service Scheme. Leading social service initiatives and community outreach programs.',
      technologies: ['Leadership', 'Social Service', 'Team Management', 'Community Service'],
      status: 'active',
      networkInfo: '127.0.0.1:3000'
    },
    {
      year: '2023 - 2024',
      title: 'Event Executive',
      company: 'E-Cell, BVDU',
      location: 'Navi Mumbai',
      description: 'Organized entrepreneurship events and workshops. Coordinated with speakers and managed event logistics for startup ecosystem development.',
      technologies: ['Event Planning', 'Coordination', 'Entrepreneurship', 'Networking'],
      status: 'completed',
      networkInfo: '127.0.0.1:5000'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">NETWORK</span>
            <span className="text-white ml-2">ACTIVITY</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </div>

        {/* Internships Section */}
        <div className="mb-16">
          <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-8 text-center">
            EXTERNAL CONNECTIONS
          </h3>
          <div className="text-center mb-8">
            <span className="text-cyan-400 font-mono text-sm bg-gray-900/50 border border-cyan-500/30 rounded px-3 py-1">
              203.0.113.42:443
            </span>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

            <div className="space-y-12">
              {internships.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gray-900 border-4 border-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-cyan-400 font-mono text-sm font-bold">{exp.year}</span>
                      </div>

                      <h3 className="font-orbitron text-xl font-bold text-white mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center mb-3 text-gray-400">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="mr-4">{exp.company}</span>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurricular Section */}
        <div>
          <h3 className="font-orbitron text-2xl font-bold text-green-400 mb-8 text-center">
            LOCAL NETWORK OPERATIONS
          </h3>
          <div className="text-center mb-8">
            <span className="text-green-400 font-mono text-sm bg-gray-900/50 border border-green-500/30 rounded px-3 py-1">
              127.0.0.1:8080
            </span>
          </div>
          <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {extracurricular.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gray-900 border-4 border-green-500 rounded-full flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full ${
                    exp.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-cyan-400'
                  }`}></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 font-mono text-sm font-bold">{exp.year}</span>
                      {exp.status === 'active' && (
                        <span className="ml-2 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-mono">
                          ACTIVE
                        </span>
                      )}
                    </div>

                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center mb-3 text-gray-400">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="mr-4">{exp.company}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>


                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-mono text-green-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;