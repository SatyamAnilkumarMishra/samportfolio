'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [time, setTime] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'work', label: '01_WORK' },
    { id: 'systems', label: '02_SYSTEMS' },
    { id: 'stack', label: '03_STACK' },
    { id: 'notes', label: '04_NOTES' },
    { id: 'about', label: '05_ABOUT' },
    { id: 'contact', label: '06_CONTACT' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-[#080A0C]/90 backdrop-blur-md border-[#20282D] py-2.5 shadow-2xl' 
          : 'bg-[#080A0C]/60 backdrop-blur-sm border-[#20282D]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between font-mono text-xs">
          
          {/* Logo / System ID */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => onNavigate('hero')} 
              className="flex items-center space-x-2 text-[#F1F3F4] hover:text-[#7CFF4F] transition-colors focus:outline-none group text-left"
            >
              <span className="inline-block w-2 h-2 bg-[#7CFF4F] rounded-full animate-pulse"></span>
              <span className="font-bold tracking-wider text-sm">SATYAM.MISHRA</span>
              <span className="hidden md:inline-block text-[#5F696F] text-[10px] pl-1 border-l border-[#20282D]">
                SYS_v{PORTFOLIO_DATA.engineer.version}
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#0D1114] border border-[#20282D] px-2 py-1 rounded-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded transition-all duration-150 tracking-wider ${
                    isActive
                      ? 'bg-[#11171B] text-[#7CFF4F] border border-[#7CFF4F]/30 font-semibold shadow-sm'
                      : 'text-[#9AA4AA] hover:text-[#F1F3F4] hover:bg-[#11171B]/50'
                  }`}
                >
                  <span className={isActive ? 'text-[#7CFF4F]' : 'text-[#5F696F]'}>
                    {item.label.split('_')[0]}_
                  </span>
                  {item.label.split('_')[1]}
                </button>
              );
            })}
          </nav>

          {/* Right Status Indicator & Clock */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-[#9AA4AA] text-[11px] bg-[#0D1114] px-2.5 py-1 rounded border border-[#20282D]">
              <span className="text-[#5F696F]">SYS_TIME</span>
              <span className="text-[#F1F3F4] font-medium">{time || '00:00:00 UTC'}</span>
            </div>

            <div className="flex items-center space-x-2 bg-[#7CFF4F]/10 border border-[#7CFF4F]/30 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#7CFF4F] rounded-full animate-ping"></span>
              <span className="text-[#7CFF4F] font-bold tracking-wide text-[10px]">● AVAILABLE</span>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="flex lg:hidden overflow-x-auto py-2 mt-2 gap-2 border-t border-[#20282D]/40 scrollbar-none font-mono text-[11px]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap px-2.5 py-1 rounded border transition-colors ${
                  isActive
                    ? 'bg-[#11171B] text-[#7CFF4F] border-[#7CFF4F]/40'
                    : 'bg-[#0D1114] text-[#9AA4AA] border-[#20282D]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
