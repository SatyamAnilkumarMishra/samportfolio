'use client';

import React from 'react';
import { Article } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Tag, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080A0C]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <div className="fixed inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0D1114] border border-[#20282D] w-full max-w-3xl max-h-[85vh] rounded-lg shadow-2xl overflow-hidden flex flex-col z-10 relative"
        >
          {/* Header */}
          <div className="bg-[#11171B] border-b border-[#20282D] px-6 py-4 flex items-center justify-between font-mono text-xs shrink-0">
            <div className="flex items-center space-x-2 text-[#7CFF4F]">
              <BookOpen className="w-4 h-4" />
              <span>ENGINEERING_NOTE // {article.number}</span>
            </div>
            <button
              onClick={onClose}
              className="text-[#9AA4AA] hover:text-[#7CFF4F] p-1 rounded hover:bg-[#20282D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans text-sm leading-relaxed text-[#9AA4AA]">
            
            {/* Meta header */}
            <div className="border-b border-[#20282D] pb-6 space-y-3 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-4 text-[#5F696F]">
                <span className="flex items-center gap-1.5 text-[#7CFF4F]">
                  <Tag className="w-3.5 h-3.5" />
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F1F3F4] font-sans tracking-tight leading-snug">
                {article.title}
              </h2>
            </div>

            {/* Content Markdown simulation */}
            <div className="prose prose-invert max-w-none text-[#9AA4AA] space-y-4 font-sans text-sm leading-relaxed">
              {article.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-lg font-bold text-[#F1F3F4] pt-4 font-mono">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('#### ')) {
                  return (
                    <h4 key={i} className="text-base font-bold text-[#7CFF4F] pt-2 font-mono">
                      {paragraph.replace('#### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const code = lines.slice(1, -1).join('\n');
                  return (
                    <pre key={i} className="bg-[#080A0C] border border-[#20282D] p-4 rounded text-xs font-mono text-[#F1F3F4] overflow-x-auto my-4">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </div>

          </div>

          {/* Footer */}
          <div className="bg-[#11171B] border-t border-[#20282D] px-6 py-3 flex justify-end font-mono text-xs">
            <button
              onClick={onClose}
              className="bg-[#20282D] hover:bg-[#2E3A42] text-[#F1F3F4] px-4 py-2 rounded transition-colors"
            >
              CLOSE ARTICLE
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

