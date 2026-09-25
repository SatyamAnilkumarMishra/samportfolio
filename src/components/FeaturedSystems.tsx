'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';
import { Github, ExternalLink, FileCode, ArrowRight } from 'lucide-react';

export const FeaturedSystems: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              01 // PRODUCTION ARCHITECTURES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              SELECTED SYSTEMS
            </h2>
          </div>
          <div className="font-mono text-xs text-[#5F696F]">
            SYSTEM_COUNT: {PORTFOLIO_DATA.projects.length} ACTIVE_HARNESSES
          </div>
        </div>

        {/* Project System Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0D1114] border border-[#20282D] hover:border-[#7CFF4F]/50 rounded-lg p-6 sm:p-8 transition-all duration-200 group hover:shadow-xl hover:shadow-[#7CFF4F]/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Column: Number & Title & Description */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Top Bar: Number & Tagline */}
                  <div className="flex items-center space-x-3 font-mono text-xs">
                    <span className="bg-[#11171B] border border-[#20282D] text-[#7CFF4F] px-2.5 py-0.5 rounded font-bold">
                      SYSTEM_{project.number}
                    </span>
                    <span className="text-[#5F696F]">//</span>
                    <span className="text-[#9AA4AA]">{project.tagline}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F3F4] group-hover:text-[#7CFF4F] transition-colors font-sans">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#9AA4AA] leading-relaxed max-w-2xl font-sans">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#080A0C] border border-[#20282D] text-[#F1F3F4] px-2.5 py-1 rounded hover:border-[#7CFF4F]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Column: Actions & Case Study Trigger */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-[#20282D]/60 lg:pl-6">
                  
                  <div className="font-mono text-xs text-[#5F696F] space-y-1">
                    <div>REGRESSION_TESTS: PASSED</div>
                    <div>COVERAGE: 98.4%</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="w-full bg-[#11171B] hover:bg-[#7CFF4F] text-[#F1F3F4] hover:text-[#080A0C] font-bold px-4 py-2.5 rounded border border-[#20282D] hover:border-[#7CFF4F] transition-all flex items-center justify-between group/btn"
                    >
                      <span className="flex items-center space-x-2">
                        <FileCode className="w-4 h-4 text-[#7CFF4F] group-hover/btn:text-[#080A0C]" />
                        <span>CASE STUDY</span>
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#080A0C] hover:bg-[#11171B] text-[#9AA4AA] hover:text-[#F1F3F4] py-2 px-3 rounded border border-[#20282D] text-center flex items-center justify-center space-x-1.5 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>CODE</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#080A0C] hover:bg-[#11171B] text-[#53D8FF] py-2 px-3 rounded border border-[#20282D] text-center flex items-center justify-center space-x-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

    </section>
  );
};
