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

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = inputVal.trim().toLowerCase();
    if (!rawCmd) return;

    let output: React.ReactNode = null;

    switch (rawCmd) {
      case 'help':
        output = (
          <div className="text-[#9AA4AA] space-y-1 text-xs">
            <div>Available commands:</div>
            <div>- <span className="text-[#7CFF4F]">contact</span>: Display all contact endpoints</div>
            <div>- <span className="text-[#7CFF4F]">email</span>: Open mail client or view email address</div>
            <div>- <span className="text-[#7CFF4F]">github</span>: Navigate to GitHub profile</div>
            <div>- <span className="text-[#7CFF4F]">linkedin</span>: Navigate to LinkedIn profile</div>
            <div>- <span className="text-[#7CFF4F]">resume</span>: Open engineer resume</div>
            <div>- <span className="text-[#7CFF4F]">clear</span>: Clear terminal console history</div>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1.5 pt-1 text-[#F1F3F4]">
            <div>github → {PORTFOLIO_DATA.engineer.socialLinks.github}</div>
            <div>linkedin → {PORTFOLIO_DATA.engineer.socialLinks.linkedin}</div>
            <div>email → {PORTFOLIO_DATA.engineer.socialLinks.email}</div>
          </div>
        );
        break;
      case 'email':
        window.location.href = `mailto:${PORTFOLIO_DATA.engineer.socialLinks.email}`;
        output = <div className="text-[#7CFF4F]">Opening mail client... ({PORTFOLIO_DATA.engineer.socialLinks.email})</div>;
        break;
      case 'github':
        window.open(PORTFOLIO_DATA.engineer.socialLinks.github, '_blank');
        output = <div className="text-[#7CFF4F]">Opening GitHub profile...</div>;
        break;
      case 'linkedin':
        window.open(PORTFOLIO_DATA.engineer.socialLinks.linkedin, '_blank');
        output = <div className="text-[#53D8FF]">Opening LinkedIn profile...</div>;
        break;
      case 'resume':
        window.open(PORTFOLIO_DATA.engineer.socialLinks.resume, '_blank');
        output = <div className="text-[#FFB84D]">Downloading resume...</div>;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        output = (
          <div className="text-[#FFB84D]">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-[#7CFF4F] font-bold">help</span> for command list.
          </div>
        );
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
    setInputVal('');
  };

  return (
    <section id="contact" className="py-20 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              06 // CONTACT INTERFACE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              INITIATE CONTACT
            </h2>
          </div>
          <div className="font-mono text-xs text-[#5F696F]">
            ENCRYPTED_ENDPOINT // OPEN_TO_PROJECTS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-3xl font-extrabold text-[#F1F3F4] font-sans">
                Let&apos;s build something useful.
              </h3>
              <p className="text-sm text-[#9AA4AA] leading-relaxed font-sans">
                Available for software engineering roles, AI infrastructure projects, system design consultations, and high-impact technical collaborations.
              </p>
            </div>

            {/* Quick Action Chips */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={`mailto:${PORTFOLIO_DATA.engineer.socialLinks.email}`}
                className="w-full bg-[#0D1114] border border-[#20282D] hover:border-[#7CFF4F] p-4 rounded-md flex items-center justify-between text-[#F1F3F4] group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#7CFF4F]" />
                  <span>{PORTFOLIO_DATA.engineer.socialLinks.email}</span>
                </div>
                <Send className="w-4 h-4 text-[#5F696F] group-hover:text-[#7CFF4F] transition-colors" />
              </a>

              <div className="flex gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 bg-[#0D1114] border border-[#20282D] hover:border-[#7CFF4F]/50 p-3 rounded-md flex items-center justify-center space-x-2 text-[#9AA4AA] hover:text-[#F1F3F4] transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#7CFF4F]" /> : <Mail className="w-4 h-4 text-[#7CFF4F]" />}
                  <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
                </button>

                <a
                  href={PORTFOLIO_DATA.engineer.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0D1114] border border-[#20282D] hover:border-[#7CFF4F]/50 rounded-md text-[#9AA4AA] hover:text-[#7CFF4F] transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.engineer.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0D1114] border border-[#20282D] hover:border-[#53D8FF]/50 rounded-md text-[#9AA4AA] hover:text-[#53D8FF] transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.engineer.socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0D1114] border border-[#20282D] hover:border-[#FFB84D]/50 rounded-md text-[#9AA4AA] hover:text-[#FFB84D] transition-colors"
                  title="Resume"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive CLI Terminal */}
          <div className="lg:col-span-7 bg-[#0D1114] border border-[#20282D] rounded-lg overflow-hidden shadow-2xl flex flex-col h-[380px]">
            
            {/* Terminal Window Header */}
            <div className="bg-[#11171B] border-b border-[#20282D] px-4 py-2.5 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#7CFF4F]" />
                <span className="text-[#F1F3F4] font-bold">CONTACT_CLI // SHELL</span>
              </div>
              <div className="text-[10px] text-[#5F696F]">
                TYPE &apos;help&apos; FOR COMMANDS
              </div>
            </div>

            {/* Terminal Output Scroll Area */}
            <div className="p-4 font-mono text-xs flex-1 overflow-y-auto space-y-3">
              <div className="text-[#5F696F] text-[11px] border-b border-[#20282D]/50 pb-2">
                Satyam Mishra OS Terminal [Version 2.4.0]<br />
                Type a command or use interactive links.
              </div>

              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-2 text-[#5F696F]">
                    <span className="text-[#7CFF4F]">$</span>
                    <span className="text-[#F1F3F4] font-bold">{item.cmd}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Command Input Form */}
            <form onSubmit={handleCommand} className="bg-[#080A0C] border-t border-[#20282D] px-4 py-2 flex items-center space-x-2 font-mono text-xs">
              <span className="text-[#7CFF4F] font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. contact, email, clear)..."
                className="flex-1 bg-transparent text-[#F1F3F4] focus:outline-none placeholder-[#5F696F]"
              />
              <button type="submit" className="text-[#5F696F] hover:text-[#7CFF4F] p-1">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

