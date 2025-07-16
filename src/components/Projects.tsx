import React, { useState } from 'react';
import { Github, ExternalLink, Database, Bot, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'timetable-generator',
      title: 'Time Table Generator',
      description: 'Web application that generates conflict-free college timetables using smart logic with subject allocation and faculty mapping.',
      tags: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
      icon: Bot,
      gradient: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/JEEVAN2710',
      demo: 'https://github.com/JEEVAN2710'
    },
    {
      id: 'saksham-naari',
      title: 'SakshamNaari',
      description: 'Women literacy & empowerment platform with educational content, goal tracking, and multilingual support.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      icon: Database,
      gradient: 'from-green-500 to-teal-600',
      github: 'https://github.com/JEEVAN2710',
      demo: 'https://github.com/JEEVAN2710'
    },
    {
      id: 'youtube-summarizer',
      title: 'YouTube Video Summarizer',
      description: 'AI-powered web app that extracts and summarizes YouTube video transcripts using NLP techniques.',
      tags: ['Python', 'Flask', 'NLP', 'Transformers'],
      icon: Globe,
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/JEEVAN2710',
      demo: 'https://github.com/JEEVAN2710'
    },
    {
      id: 'chat-app',
      title: 'Real-Time Chat Application',
      description: 'Live messaging platform with Firebase authentication and multi-user support in responsive interface.',
      tags: ['Firebase', 'JavaScript', 'HTML/CSS', 'Real-time'],
      icon: Bot,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/JEEVAN2710',
      demo: 'https://github.com/JEEVAN2710'
    },
    {
      id: 'expense-manager',
      title: 'Expense Manager Android App',
      description: 'Native Android app for tracking and managing personal expenses with SQLite database and offline functionality.',
      tags: ['Java', 'Android Studio', 'SQLite', 'XML'],
      icon: Database,
      gradient: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/JEEVAN2710',
      demo: 'https://github.com/JEEVAN2710'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-400">SYSTEM</span>
            <span className="text-white ml-2">LOGS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              <div className="relative bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mr-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-mono text-sm">ACCESS REPO</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-mono text-sm">LAUNCH MODULE</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;