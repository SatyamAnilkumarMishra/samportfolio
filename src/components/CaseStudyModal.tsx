'use client';

import React from 'react';
import { Project } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText, CheckCircle, AlertTriangle, Layers, Cpu, Code2, Award } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080A0C]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose}></div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0D1114] border border-[#20282D] w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col z-10 relative"
        >
          
          {/* Header Bar */}
          <div className="bg-[#11171B] border-b border-[#20282D] px-6 py-4 flex items-center justify-between font-mono text-xs shrink-0">
            <div className="flex items-center space-x-3">
              <span className="text-[#7CFF4F] font-bold">CASE_STUDY // {project.number}</span>
              <span className="text-[#5F696F]">|</span>
              <span className="text-[#F1F3F4] truncate font-semibold">{project.title}</span>
            </div>
            
            <button
              onClick={onClose}
              className="text-[#9AA4AA] hover:text-[#7CFF4F] p-1.5 rounded hover:bg-[#20282D] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-[#9AA4AA] font-sans leading-relaxed text-sm">
            
            {/* Title & Tagline Banner */}
            <div className="border-b border-[#20282D] pb-6 space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] tracking-widest">
                SYSTEM SPECIFICATION DOCUMENT
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F1F3F4] font-sans tracking-tight">
                {project.title}
              </h2>
              <p className="text-base text-[#9AA4AA]">
                {project.tagline}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#11171B] border border-[#20282D] text-[#F1F3F4] px-2.5 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-3 font-mono text-xs">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#7CFF4F] hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository ↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#53D8FF] hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Environment ↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* 01 — PROBLEM */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] font-bold flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-[#FFB84D]" />
                <span>01 — PROBLEM</span>
              </div>
              <div className="bg-[#080A0C] border border-[#20282D] rounded-md p-4 text-[#F1F3F4]">
                {caseStudy.problem}
              </div>
            </section>

            {/* 02 — REQUIREMENTS */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] font-bold flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#7CFF4F]" />
                <span>02 — REQUIREMENTS</span>
              </div>
              <ul className="space-y-2 font-mono text-xs">
                {caseStudy.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-2 bg-[#080A0C] border border-[#20282D] p-3 rounded text-[#9AA4AA]">
                    <span className="text-[#7CFF4F] font-bold shrink-0">[{idx + 1}]</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 03 — ARCHITECTURE */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] font-bold flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#53D8FF]" />
                <span>03 — ARCHITECTURE</span>
              </div>
              <div className="bg-[#080A0C] border border-[#20282D] rounded-md p-4 font-mono text-xs text-[#53D8FF] leading-relaxed">
                {caseStudy.architectureOverview}
              </div>
            </section>

            {/* 04 — ENGINEERING DECISIONS */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] font-bold flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#7CFF4F]" />
                <span>04 — ENGINEERING DECISIONS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.engineeringDecisions.map((dec, idx) => (
                  <div key={idx} className="bg-[#080A0C] border border-[#20282D] p-4 rounded-md space-y-2 font-sans">
                    <div className="font-mono text-xs text-[#F1F3F4] font-bold">{dec.title}</div>
                    <p className="text-xs text-[#9AA4AA]">{dec.decision}</p>
                    <div className="text-[11px] font-mono text-[#7CFF4F] bg-[#11171B] p-2 rounded border border-[#20282D]">
                      IMPACT: {dec.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 05 — IMPLEMENTATION */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] font-bold flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-[#7CFF4F]" />
                <span>05 — IMPLEMENTATION</span>
              </div>
              <p className="text-xs text-[#9AA4AA]">{caseStudy.implementationDetails}</p>

              {caseStudy.codeSnippet && (
                <div className="bg-[#080A0C] border border-[#20282D] rounded-md overflow-hidden font-mono text-xs">
                  <div className="bg-[#11171B] border-b border-[#20282D] px-3 py-1.5 text-[11px] text-[#5F696F] flex justify-between">
                    <span>{caseStudy.codeSnippet.filename}</span>
                    <span>{caseStudy.codeSnippet.language.toUpperCase()}</span>
                  </div>
                  <pre className="p-4 text-[#F1F3F4] overflow-x-auto text-[11px] leading-relaxed">
                    <code>{caseStudy.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>

            {/* 06 — CHALLENGES */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#FFB84D] font-bold flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>06 — CHALLENGES & CONSTRAINTS</span>
              </div>
              <ul className="space-y-2 font-mono text-xs">
                {caseStudy.challenges.map((ch, idx) => (
                  <li key={idx} className="bg-[#080A0C] border border-[#20282D] p-3 rounded text-[#9AA4AA] flex items-start space-x-2">
                    <span className="text-[#FFB84D]">!</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 07 — RESULTS */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#7CFF4F] font-bold flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#7CFF4F]" />
                <span>07 — MEASURABLE RESULTS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                {caseStudy.results.map((res, idx) => (
                  <div key={idx} className="bg-[#080A0C] border border-[#20282D] p-4 rounded text-center space-y-1">
                    <div className="text-xl font-extrabold text-[#7CFF4F]">{res.value}</div>
                    <div className="text-xs text-[#F1F3F4]">{res.metric}</div>
                    <div className="text-[10px] text-[#5F696F]">{res.context}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 08 — WHAT I LEARNED */}
            <section className="space-y-3">
              <div className="font-mono text-xs text-[#53D8FF] font-bold flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#53D8FF]" />
                <span>08 — WHAT I LEARNED</span>
              </div>
              <ul className="space-y-2 font-mono text-xs">
                {caseStudy.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="bg-[#080A0C] border border-[#20282D] p-3 rounded text-[#F1F3F4]">
                    • {lesson}
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Footer Bar */}
          <div className="bg-[#11171B] border-t border-[#20282D] px-6 py-3 flex justify-end font-mono text-xs">
            <button
              onClick={onClose}
              className="bg-[#20282D] hover:bg-[#2E3A42] text-[#F1F3F4] px-4 py-2 rounded transition-colors"
            >
              CLOSE SPECIFICATION
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
