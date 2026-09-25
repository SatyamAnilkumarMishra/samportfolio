'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Code, Terminal } from 'lucide-react';

export const EngineeringSnapshot: React.FC = () => {
  const snap = PORTFOLIO_DATA.engineer.terminalSnapshot;

  return (
    <section className="py-12 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Engineering Console Card */}
        <div className="bg-[#0D1114] border border-[#20282D] rounded-lg overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-[#11171B] border-b border-[#20282D] px-4 py-2.5 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#20282D]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#20282D]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#20282D]"></span>
              </div>
              <span className="text-[#9AA4AA] text-[11px] font-semibold flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#7CFF4F]" />
                satyam_mishra_profile.config.py
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-[10px] text-[#5F696F]">
              <span>UTF-8</span>
              <span>PYTHON 3.12</span>
              <span className="text-[#7CFF4F]">SYS_READY</span>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
            <div className="text-[#5F696F] pb-3 text-xs flex items-center gap-2 border-b border-[#20282D]/50 mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#7CFF4F]" />
              <span>&gt; whoami --format=python</span>
            </div>

            <div className="space-y-1.5 text-[#F1F3F4]">
              {/* Line 1: role */}
              <div className="flex">
                <span className="text-[#5F696F] w-8 shrink-0 select-none">01</span>
                <span>
                  <span className="text-[#53D8FF]">role</span>{' '}
                  <span className="text-[#5F696F]">=</span>{' '}
                  <span className="text-[#7CFF4F]">&quot;{snap.role}&quot;</span>
                </span>
              </div>

              {/* Line 2: focus */}
              <div className="flex">
                <span className="text-[#5F696F] w-8 shrink-0 select-none">02</span>
                <span>
                  <span className="text-[#53D8FF]">focus</span>{' '}
                  <span className="text-[#5F696F]">=</span>{' '}
                  <span className="text-[#5F696F]">[</span>
                  {snap.focus.map((f, i) => (
                    <React.Fragment key={f}>
                      <span className="text-[#7CFF4F]">&quot;{f}&quot;</span>
                      {i < snap.focus.length - 1 && <span className="text-[#5F696F]">, </span>}
                    </React.Fragment>
                  ))}
                  <span className="text-[#5F696F]">]</span>
                </span>
              </div>

              {/* Line 3: languages */}
              <div className="flex">
                <span className="text-[#5F696F] w-8 shrink-0 select-none">03</span>
                <span>
                  <span className="text-[#53D8FF]">languages</span>{' '}
                  <span className="text-[#5F696F]">=</span>{' '}
                  <span className="text-[#5F696F]">[</span>
                  {snap.languages.map((l, i) => (
                    <React.Fragment key={l}>
                      <span className="text-[#FFB84D]">&quot;{l}&quot;</span>
                      {i < snap.languages.length - 1 && <span className="text-[#5F696F]">, </span>}
                    </React.Fragment>
                  ))}
                  <span className="text-[#5F696F]">]</span>
                </span>
              </div>

              {/* Line 4: currently_building */}
              <div className="flex">
                <span className="text-[#5F696F] w-8 shrink-0 select-none">04</span>
                <span>
                  <span className="text-[#53D8FF]">currently_building</span>{' '}
                  <span className="text-[#5F696F]">=</span>{' '}
                  <span className="text-[#7CFF4F]">&quot;{snap.currentlyBuilding}&quot;</span>
                </span>
              </div>

              {/* Line 5: status */}
              <div className="flex">
                <span className="text-[#5F696F] w-8 shrink-0 select-none">05</span>
                <span>
                  <span className="text-[#53D8FF]">status</span>{' '}
                  <span className="text-[#5F696F]">=</span>{' '}
                  <span className="text-[#7CFF4F] font-bold">&quot;{snap.status}&quot;</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
