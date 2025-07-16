import React from 'react';
import { MapPin, Mail, GraduationCap, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">SYSTEM</span>
            <span className="text-white ml-2">IDENTITY</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <div className="w-48 h-48 rounded-full border-4 border-cyan-500/30 overflow-hidden bg-gray-800/50 flex items-center justify-center hover:border-cyan-400/50 transition-all duration-300">
                    <img 
                      src="/profile/jeevan.jpg" 
                      alt="Jeevan Patil Profile" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden flex-col items-center text-cyan-400">
                      <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2">
                        <span className="text-2xl font-orbitron">JP</span>
                      </div>
                      <span className="font-mono text-sm">JEEVAN PATIL</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">JEEVAN PATIL</h3>
                  <p className="text-cyan-400 font-mono text-sm">COMPUTER SCIENCE ENGINEER</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Navi Mumbai, India' },
                { icon: Mail, label: 'Email', value: 'patiljeevan2710@gmail.com' },
                { icon: GraduationCap, label: 'Education', value: 'BTech CSE' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-400 font-mono">{item.label}</span>
                    <div className="text-white font-orbitron">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="/resume.pdf" 
              download="Jeevan_Patil_Resume.pdf"
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-orbitron font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 w-fit"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl font-bold text-green-400 mb-4">CORE OBJECTIVES</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Develop innovative mobile applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Build scalable web solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Apply AI/ML to solve real problems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Lead technical communities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl font-bold text-purple-400 mb-4">PROCESSING MODES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Problem Solving</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Team Leadership</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Communication</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;