'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Code2, Server, Cpu, Wrench, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  const getIcon = (code: string) => {
    switch (code) {
      case '01_LANG':
        return <Code2 className="w-4 h-4 text-[#7CFF4F]" />;
      case '02_BACKEND':
        return <Server className="w-4 h-4 text-[#53D8FF]" />;
      case '03_AI_ML':
        return <Cpu className="w-4 h-4 text-[#7CFF4F]" />;
      case '04_TOOLS':
        return <Wrench className="w-4 h-4 text-[#FFB84D]" />;
      default:
        return <Layers className="w-4 h-4 text-[#7CFF4F]" />;
    }
  };

  return (
    <section id="stack" className="py-20 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              03 // TECHNICAL DOMAINS & STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              ENGINEERING MATRIX
            </h2>
          </div>
          <div className="font-mono text-xs text-[#5F696F]">
            NO_SYNTHETIC_PERCENTAGES // PRODUCTION_TESTED_TOOLING
          </div>
        </div>

        {/* Domain Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.techStack.map((domain) => (
            <div
              key={domain.code}
              className="bg-[#0D1114] border border-[#20282D] hover:border-[#7CFF4F]/40 rounded-lg p-6 space-y-5 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Domain Header */}
                <div className="flex items-center justify-between border-b border-[#20282D] pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded bg-[#11171B] border border-[#20282D]">
                      {getIcon(domain.code)}
                    </div>
                    <h3 className="font-mono font-bold text-xs text-[#F1F3F4] tracking-wide">
                      {domain.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#5F696F]">{domain.code}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#9AA4AA] font-sans leading-relaxed">
                  {domain.description}
                </p>

              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                {domain.items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#080A0C] border border-[#20282D] group-hover:border-[#2E3A42] text-[#F1F3F4] px-2.5 py-1 rounded text-[11px] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
