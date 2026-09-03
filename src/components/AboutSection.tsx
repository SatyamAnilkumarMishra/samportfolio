'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GitHubMetrics } from './GitHubMetrics';
import { User, Terminal, Cpu, Upload } from 'lucide-react';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              05 // SYSTEM ARCHITECT PROFILE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              ABOUT SATYAM MISHRA
            </h2>
          </div>
          <div className="font-mono text-xs text-[#5F696F]">
            SPECS // PRINCIPLES // METRICS
          </div>
        </div>

        {/* About Grid: Profile Image + Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Photo / Placeholder Frame */}
          <div className="lg:col-span-4 bg-[#0D1114] border border-[#20282D] rounded-lg p-5 space-y-4">
            
            {/* Header bar */}
            <div className="flex items-center justify-between font-mono text-xs border-b border-[#20282D] pb-2 text-[#5F696F]">
              <span className="flex items-center gap-1.5 text-[#7CFF4F]">
                <User className="w-3.5 h-3.5" />
                AVATAR_FRAME
              </span>
              <span>satyam-mishra.png</span>
            </div>

            {/* Photo Box */}
            <div className="relative aspect-square w-full rounded border border-[#20282D] bg-[#080A0C] overflow-hidden flex flex-col items-center justify-center text-center p-4">
              {!imgError ? (
                <Image
                  src="/satyam-mishra.png"
                  alt="Satyam Mishra"
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="space-y-3 flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="p-4 bg-[#11171B] border border-[#20282D] rounded-full text-[#7CFF4F]">
                    <Cpu className="w-10 h-10 animate-pulse" />
                  </div>
                  <div className="font-mono text-xs font-bold text-[#F1F3F4]">
                    ENGINEER PROFILE AVATAR
                  </div>
                  <div className="font-mono text-[11px] text-[#9AA4AA] max-w-xs leading-normal">
                    Ready for image upload. Drop <code className="text-[#7CFF4F] bg-[#11171B] px-1 py-0.5 rounded">satyam-mishra.png</code> into the <code className="text-[#53D8FF] bg-[#11171B] px-1 py-0.5 rounded">public/</code> directory.
                  </div>
                  <div className="inline-flex items-center space-x-1 font-mono text-[10px] text-[#7CFF4F] bg-[#7CFF4F]/10 border border-[#7CFF4F]/30 px-2 py-0.5 rounded">
                    <Upload className="w-3 h-3" />
                    <span>SLOT READY</span>
                  </div>
                </div>
              )}
            </div>

            {/* Spec Card */}
            <div className="font-mono text-xs space-y-1.5 text-[#9AA4AA] pt-2 border-t border-[#20282D]">
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-[#F1F3F4]">{PORTFOLIO_DATA.engineer.location}</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-[#7CFF4F] font-bold">{PORTFOLIO_DATA.engineer.availability}</span>
              </div>
              <div className="flex justify-between">
                <span>PRIMARY_FOCUS:</span>
                <span className="text-[#53D8FF]">AI & Backend Systems</span>
              </div>
            </div>

          </div>

          {/* Right Column: Statement & Engineering Philosophy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Direct Statement */}
            <div className="bg-[#0D1114] border border-[#20282D] rounded-lg p-6 sm:p-8 space-y-4">
              <div className="font-mono text-xs text-[#7CFF4F] flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#7CFF4F]" />
                <span>// STATEMENT</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-semibold text-[#F1F3F4] font-sans leading-snug">
                &ldquo;I build software systems around AI and backend infrastructure, with a focus on understanding how systems work under the hood.&rdquo;
              </blockquote>

              <p className="text-sm text-[#9AA4AA] font-sans leading-relaxed">
                Rather than treating modern machine learning models and backend services as opaque black boxes, I focus on the underlying mechanics: memory bounds, vector retrieval precision, asynchronous execution loops, and deterministic evaluation metrics.
              </p>
            </div>

            {/* Core Engineering Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0D1114] border border-[#20282D] p-5 rounded-lg space-y-2">
                <div className="font-mono text-xs text-[#7CFF4F] font-bold">01 / FIRST-PRINCIPLES THINKING</div>
                <p className="text-xs text-[#9AA4AA] leading-relaxed">
                  Understand raw memory, network, and token constraints before picking frameworks or abstractions.
                </p>
              </div>

              <div className="bg-[#0D1114] border border-[#20282D] p-5 rounded-lg space-y-2">
                <div className="font-mono text-xs text-[#53D8FF] font-bold">02 / RIGOROUS EVALUATION</div>
                <p className="text-xs text-[#9AA4AA] leading-relaxed">
                  If you cannot measure quality and regression programmatically, you cannot deploy AI systems safely to production.
                </p>
              </div>

              <div className="bg-[#0D1114] border border-[#20282D] p-5 rounded-lg space-y-2">
                <div className="font-mono text-xs text-[#FFB84D] font-bold">03 / MINIMALIST ARCHITECTURE</div>
                <p className="text-xs text-[#9AA4AA] leading-relaxed">
                  Remove unnecessary dependencies. Clean, decoupled Python and C++ code is far easier to debug and scale.
                </p>
              </div>

              <div className="bg-[#0D1114] border border-[#20282D] p-5 rounded-lg space-y-2">
                <div className="font-mono text-xs text-[#7CFF4F] font-bold">04 / DETERMINISTIC CONTRACTS</div>
                <p className="text-xs text-[#9AA4AA] leading-relaxed">
                  Guard non-deterministic model outputs with strict schema assertions and deterministic fallback pipelines.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* GitHub Metrics Snapshot */}
        <GitHubMetrics />

      </div>
    </section>
  );
};
