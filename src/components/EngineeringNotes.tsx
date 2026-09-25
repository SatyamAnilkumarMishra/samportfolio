'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Article } from '@/data/portfolioData';
import { ArticleModal } from './ArticleModal';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

export const EngineeringNotes: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="notes" className="py-20 border-b border-[#20282D]/80 bg-[#080A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              04 // TECHNICAL PUBLICATIONS & ESSAYS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              ENGINEERING NOTES
            </h2>
          </div>
          <div className="font-mono text-xs text-[#5F696F]">
            ARTICLES: {PORTFOLIO_DATA.articles.length} PUBLISHED_WRITINGS
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#0D1114] border border-[#20282D] hover:border-[#7CFF4F]/50 rounded-lg p-6 flex flex-col justify-between cursor-pointer group transition-all duration-200 hover:shadow-xl hover:shadow-[#7CFF4F]/5"
            >
              <div className="space-y-4">
                
                {/* Meta */}
                <div className="flex items-center justify-between font-mono text-[11px] text-[#5F696F]">
                  <span className="text-[#7CFF4F] font-bold">NOTE_{article.number}</span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F1F3F4] group-hover:text-[#7CFF4F] transition-colors font-sans leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#9AA4AA] font-sans leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-[#20282D]/60 flex items-center justify-between font-mono text-xs text-[#7CFF4F] font-semibold group-hover:underline">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  READ NOTE
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
