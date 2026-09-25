'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080A0C] border-t border-[#20282D] py-8 font-mono text-xs text-[#5F696F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left info */}
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#7CFF4F] rounded-full animate-pulse"></span>
            <span className="text-[#F1F3F4] font-bold">SATYAM MISHRA</span>
            <span className="text-[#20282D]">|</span>
            <span>SYSTEM_VER: {PORTFOLIO_DATA.engineer.version}</span>
          </div>

          {/* Center text */}
          <div className="text-[11px] text-center text-[#9AA4AA]">
            ENGINEERED WITH NEXT.JS 14 & TAILWIND CSS // NO FLUFF
          </div>

          {/* Right back to top */}
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center space-x-1.5 text-[#9AA4AA] hover:text-[#7CFF4F] transition-colors bg-[#0D1114] border border-[#20282D] px-3 py-1.5 rounded"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-6 text-center text-[10px] text-[#5F696F] border-t border-[#20282D]/40 pt-4">
          SATYAM MISHRA © {new Date().getFullYear()} — ALL SYSTEM RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
};
