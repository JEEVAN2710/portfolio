import React, { useState } from 'react';
import { Code, Settings, Zap, Brain } from 'lucide-react';

const Skills = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const skillModules = [
    {
      id: 'android-dev',
      title: 'Android Development',
      icon: Code,
      skills: ['Java', 'Android Studio', 'XML', 'SQLite', 'Firebase Auth', 'Firestore'],
      color: 'cyan',
      description: 'Creating native Android applications with modern development practices'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Settings,
      skills: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Flask', 'Firebase', 'Supabase'],
      color: 'green',
      description: 'Building responsive web applications with modern frameworks'
    },
    {
      id: 'ai-ml',
      title: 'AI/ML & Data Science',
      icon: Zap,
      skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'NLP', 'FastAPI'],
      color: 'yellow',
      description: 'Implementing machine learning solutions and data analysis'
    },
    {
      id: 'tools-platforms',
      title: 'Tools & Platforms',
      icon: Brain,
      skills: ['VS Code', 'Git', 'Jupyter', 'MySQL Workbench', 'Canva', 'Bootstrap'],
      color: 'purple',
      description: 'Proficient with development tools and collaborative platforms'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      icon: Brain,
      skills: ['n8n', 'Ubuntu', 'Python', 'JavaScript'],
      color: 'cyan',
      description: 'Building intelligent automation workflows and AI-powered solutions'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Log Analysis',
      icon: Brain,
      skills: ['Wazuh', 'Splunk', 'Wireshark', 'Linux'],
      color: 'purple',
      description: 'Security monitoring, threat detection, and network analysis'
    }
  ];

  const colorClasses = {
    cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    green: 'border-green-500/30 bg-green-500/10 text-green-400',
    yellow: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
    purple: 'border-purple-500/30 bg-purple-500/10 text-purple-400'
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-400">MODULES</span>
            <span className="text-white ml-2">INSTALLED</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillModules.map((module) => (
            <div
              key={module.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeModule === module.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveModule(module.id)}
              onMouseLeave={() => setActiveModule(null)}
            >
              <div className={`border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${
                colorClasses[module.color as keyof typeof colorClasses]
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    colorClasses[module.color as keyof typeof colorClasses]
                  }`}>
                    <module.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold">{module.title}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  {module.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${
                        module.color === 'cyan' ? 'bg-cyan-400' :
                        module.color === 'green' ? 'bg-green-400' :
                        module.color === 'yellow' ? 'bg-yellow-400' :
                        'bg-purple-400'
                      }`}></span>
                      <span className="text-gray-300 font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>

                {activeModule === module.id && (
                  <div className="absolute inset-0 bg-black/90 rounded-xl flex items-center justify-center p-6 backdrop-blur-sm">
                    <div className="text-center">
                      <module.icon className={`w-12 h-12 mx-auto mb-4 ${
                        module.color === 'cyan' ? 'text-cyan-400' :
                        module.color === 'green' ? 'text-green-400' :
                        module.color === 'yellow' ? 'text-yellow-400' :
                        'text-purple-400'
                      }`} />
                      <p className="text-gray-300">{module.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;