'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GitBranch, GitCommit, GitPullRequest, Code2, Server } from 'lucide-react';

export const GitHubMetrics: React.FC = () => {
  const m = PORTFOLIO_DATA.metrics;

  const stats = [
    { label: 'TOTAL COMMITS', value: m.totalCommits, icon: <GitCommit className="w-4 h-4 text-[#7CFF4F]" />, note: 'Production commit velocity' },
    { label: 'ACTIVE REPOSITORIES', value: m.activeRepositories, icon: <GitBranch className="w-4 h-4 text-[#53D8FF]" />, note: 'Open-source & private systems' },
    { label: 'PULL REQUESTS MERGED', value: m.pullRequests, icon: <GitPullRequest className="w-4 h-4 text-[#7CFF4F]" />, note: 'Code review contributions' },
    { label: 'SYSTEM EVALUATIONS', value: m.evaluationsRun, icon: <Server className="w-4 h-4 text-[#FFB84D]" />, note: 'LLM test cases executed' },
  ];

  return (
    <div className="bg-[#0D1114] border border-[#20282D] rounded-lg p-6 font-mono text-xs space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#20282D] pb-3">
        <div className="flex items-center space-x-2">
          <Code2 className="w-4 h-4 text-[#7CFF4F]" />
          <span className="text-[#F1F3F4] font-bold">ENGINEERING ACTIVITY & METRICS</span>
        </div>
        <div className="text-[10px] text-[#5F696F]">
          STATUS: VERIFIED_BUILD_CADENCE
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((st) => (
          <div key={st.label} className="bg-[#080A0C] border border-[#20282D] p-4 rounded space-y-1.5">
            <div className="flex items-center justify-between">
              {st.icon}
              <span className="text-[10px] text-[#5F696F]">REALTIME</span>
            </div>
            <div className="text-2xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              {st.value}
            </div>
            <div className="text-[11px] font-bold text-[#7CFF4F]">{st.label}</div>
            <div className="text-[10px] text-[#9AA4AA]">{st.note}</div>
          </div>
        ))}
      </div>

    </div>
  );
};
