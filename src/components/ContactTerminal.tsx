'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Terminal, Send, Github, Linkedin, Mail, FileText, Check, CornerDownLeft } from 'lucide-react';

export const ContactTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'contact',
      output: (
        <div className="space-y-1.5 pt-1 text-[#F1F3F4]">
          <div className="flex items-center space-x-3">
            <span className="text-[#5F696F] w-20">github</span>
            <span className="text-[#5F696F]">→</span>
            <a href={PORTFOLIO_DATA.engineer.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-[#7CFF4F] hover:underline">
              {PORTFOLIO_DATA.engineer.socialLinks.github}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#5F696F] w-20">linkedin</span>
            <span className="text-[#5F696F]">→</span>
            <a href={PORTFOLIO_DATA.engineer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#53D8FF] hover:underline">
              {PORTFOLIO_DATA.engineer.socialLinks.linkedin}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#5F696F] w-20">email</span>
            <span className="text-[#5F696F]">→</span>
            <a href={`mailto:${PORTFOLIO_DATA.engineer.socialLinks.email}`} className="text-[#7CFF4F] hover:underline">
              {PORTFOLIO_DATA.engineer.socialLinks.email}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#5F696F] w-20">resume</span>
            <span className="text-[#5F696F]">→</span>
            <a href={PORTFOLIO_DATA.engineer.socialLinks.resume} target="_blank" rel="noopener noreferrer" className="text-[#FFB84D] hover:underline">
              DOWNLOAD_RESUME.PDF
            </a>
          </div>
        </div>
      )
    }
  ]);

  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.engineer.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
