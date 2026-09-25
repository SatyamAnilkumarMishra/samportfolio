'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { HeroArchitectureDiagram } from './HeroArchitectureDiagram';
import { ArrowDown, Github, Terminal as TerminalIcon } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#20282D]/80 relative overflow-hidden">
      
      {/* Background subtle grid effect */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Copy & Terminal + Right Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Bio & Terminal */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* System Status Tag */}
            <div className="inline-flex items-center space-x-2 bg-[#0D1114] border border-[#20282D] px-3 py-1 rounded font-mono text-xs text-[#9AA4AA]">
              <span className="w-2 h-2 bg-[#7CFF4F] rounded-full animate-pulse"></span>
              <span className="text-[#5F696F]">SYSTEM_INITIALIZED //</span>
              <span className="text-[#F1F3F4] font-medium">SATYAM MISHRA</span>
            </div>

            {/* Bold Editorial Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F1F3F4] leading-[1.08] font-sans">
                I BUILD <br />
                <span className="text-[#7CFF4F] text-glow-green">INTELLIGENT</span> <br />
                SYSTEMS.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#9AA4AA] max-w-xl font-normal leading-relaxed">
                {PORTFOLIO_DATA.engineer.subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="bg-[#7CFF4F] text-[#080A0C] hover:bg-[#68e03d] font-bold px-6 py-3 rounded border border-[#7CFF4F] transition-all flex items-center space-x-2 group shadow-lg shadow-[#7CFF4F]/10"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PORTFOLIO_DATA.engineer.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D1114] text-[#F1F3F4] hover:border-[#7CFF4F]/50 hover:text-[#7CFF4F] px-6 py-3 rounded border border-[#20282D] transition-all flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB ↗</span>
              </a>
            </div>

            {/* Terminal-Style Status Section */}
            <div className="bg-[#0D1114] border border-[#20282D] rounded-md p-4 font-mono text-xs space-y-3 shadow-xl max-w-xl">
              
              <div className="flex items-center justify-between border-b border-[#20282D]/70 pb-2 text-[10px] text-[#5F696F]">
                <div className="flex items-center space-x-2">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#7CFF4F]" />
                  <span>ENGINEER_CONSOLE</span>
                </div>
                <span>BASH // TTY1</span>
              </div>

              {/* whoami command */}
              <div>
                <div className="flex items-center space-x-2 text-[#5F696F]">
                  <span className="text-[#7CFF4F]">$</span>
                  <span>whoami</span>
                </div>
                <div className="text-[#F1F3F4] font-semibold pl-4 pt-0.5">
                  Satyam Mishra
                </div>
              </div>

              {/* focus command */}
              <div>
                <div className="flex items-center space-x-2 text-[#5F696F]">
                  <span className="text-[#7CFF4F]">$</span>
                  <span>focus</span>
                </div>
                <div className="text-[#9AA4AA] pl-4 pt-0.5 flex flex-wrap gap-2">
                  <span className="bg-[#11171B] border border-[#20282D] px-2 py-0.5 rounded text-[11px] text-[#F1F3F4]">AI Systems</span>
                  <span className="bg-[#11171B] border border-[#20282D] px-2 py-0.5 rounded text-[11px] text-[#F1F3F4]">Backend Engineering</span>
                  <span className="bg-[#11171B] border border-[#20282D] px-2 py-0.5 rounded text-[11px] text-[#F1F3F4]">LLM Infrastructure</span>
                  <span className="bg-[#11171B] border border-[#20282D] px-2 py-0.5 rounded text-[11px] text-[#F1F3F4]">System Design</span>
                </div>
              </div>

              {/* status command */}
              <div>
                <div className="flex items-center space-x-2 text-[#5F696F]">
                  <span className="text-[#7CFF4F]">$</span>
                  <span>status</span>
                </div>
                <div className="text-[#7CFF4F] pl-4 pt-0.5 font-bold flex items-center space-x-2">
                  <span>OPEN_TO_OPPORTUNITIES</span>
                  <span className="w-1.5 h-1.5 bg-[#7CFF4F] rounded-full animate-ping"></span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Architecture Diagram */}
          <div className="lg:col-span-5 w-full">
            <HeroArchitectureDiagram />
          </div>

        </div>

      </div>
    </section>
  );
};
