import React, { useState, useEffect } from 'react';
import { ChevronDown, Activity } from 'lucide-react';
import { SplineScene } from './ui/splite';
import { Card } from './ui/card';
import { Spotlight } from './ui/spotlight';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleDisplayText, setRoleDisplayText] = useState('');
  const [isRoleTyping, setIsRoleTyping] = useState(true);
  
  const fullText = 'NEURAL INTERFACE ACTIVE';
  const roles = [
    'Full-stack Developer',
    'Android Developer', 
    'AI Automation Specialist'
  ];

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const currentRole = roles[currentRoleIndex];
    
    const typeRole = () => {
      if (index < currentRole.length) {
        setRoleDisplayText(currentRole.substring(0, index + 1));
        index++;
        setTimeout(typeRole, 100);
      } else {
        setIsRoleTyping(false);
        // Wait 2 seconds before starting to delete
        setTimeout(() => {
          deleteRole();
        }, 2000);
      }
    };
    
    const deleteRole = () => {
      if (index > 0) {
        setRoleDisplayText(currentRole.substring(0, index - 1));
        index--;
        setTimeout(deleteRole, 50);
      } else {
        setIsRoleTyping(true);
        // Move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    
    typeRole();
  }, [currentRoleIndex]);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-cyan-500/20">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="cyan"
          />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 w-fit">
                <Activity className="w-4 h-4 text-green-400 mr-2 animate-pulse" />
                <span className="text-green-400 font-mono text-sm">SYSTEM ONLINE</span>
              </div>
              
              <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">JEEVAN</span>
                <span className="text-cyan-400 ml-2">PATIL</span>
              </h1>
              
              <div className="font-mono text-base md:text-lg text-green-400 mb-8">
                {'>'} COMPUTER SCIENCE ENGINEER
                {isTyping && <span className="animate-pulse">|</span>}
              </div>

              <p className="text-neutral-300 max-w-lg mb-8 leading-relaxed">
                <span className="font-mono text-green-400 bg-black/80 px-3 py-2 rounded border border-green-500/30 backdrop-blur-sm">
                  <span className="text-green-400 text-xl">
                    {roleDisplayText}
                    <span className="animate-pulse text-green-400">█</span>
                  </span>
                </span>
              </p>

              {/* Holographic Tags */}
              <div className="flex flex-wrap justify-start gap-2">
                {['DEVELOPER', 'STUDENT', 'LEADER'].map((tag) => (
                  <div
                    key={tag}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg backdrop-blur-sm"
                  >
                    <span className="text-purple-400 font-orbitron text-xs">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;