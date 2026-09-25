'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GitCommit, Terminal, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              ENGINEERING CHANGELOG // CHRONOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              SYSTEM MILESTONES & EXPERIENCE
            </h2>
          </div>
          <div className="font-mono text-xs text-[#5F696F]">
            LOG_ENTRIES: {PORTFOLIO_DATA.timeline.length} RECORDED_COMMITS
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-[#20282D] ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-10">
          {PORTFOLIO_DATA.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Commit Dot on timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 bg-[#0D1114] border border-[#20282D] group-hover:border-[#7CFF4F] rounded-full flex items-center justify-center transition-colors">
                <GitCommit className="w-3.5 h-3.5 text-[#7CFF4F]" />
              </div>

              {/* Main Card */}
              <div className="bg-[#0D1114] border border-[#20282D] group-hover:border-[#7CFF4F]/40 rounded-lg p-6 space-y-4 transition-all shadow-lg">
                
                {/* Year & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#20282D] pb-3 gap-2">
                  <div className="space-y-0.5">
                    <h3 className="text-xl font-bold text-[#F1F3F4] font-sans">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-[#7CFF4F]">
                      AREA: {item.area}
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-[#F1F3F4] bg-[#11171B] border border-[#20282D] px-3 py-1 rounded shrink-0 w-max">
                    {item.year}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9AA4AA] font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-[#5F696F] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#7CFF4F]" />
                    <span>KEY_DELIVERABLES:</span>
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-[#F1F3F4]">
                    {item.keyDeliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7CFF4F] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {item.techUsed.map((t) => (
                    <span key={t} className="bg-[#080A0C] border border-[#20282D] text-[#9AA4AA] px-2.5 py-0.5 rounded text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
