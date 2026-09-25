'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, CheckCircle2, MessageSquareCode, Activity } from 'lucide-react';

interface SystemNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  status: 'ACTIVE' | 'PROCESSING' | 'IDLE';
  metrics: string;
  details: string;
}

export const HeroArchitectureDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('llm');

  const nodes: SystemNode[] = [
    {
      id: 'input',
      label: 'USER / INPUT',
      sublabel: 'Query Ingestion',
      icon: <Terminal className="w-4 h-4 text-[#7CFF4F]" />,
      status: 'ACTIVE',
      metrics: 'Latency < 12ms',
      details: 'Accepts raw natural language prompts or structured document payloads via REST/gRPC endpoints.'
    },
    {
      id: 'retrieval',
      label: 'RETRIEVAL',
      sublabel: 'Hybrid Vector Search',
      icon: <Database className="w-4 h-4 text-[#53D8FF]" />,
      status: 'PROCESSING',
      metrics: 'MRR@10: 0.91',
      details: 'Executes dense vector search (Qdrant) + BM25 sparse index keyword matching with RRF fusion.'
    },
    {
      id: 'llm',
      label: 'LLM ENGINE',
      sublabel: 'Inference Orchestrator',
      icon: <Cpu className="w-4 h-4 text-[#7CFF4F]" />,
      status: 'ACTIVE',
      metrics: '142 tps',
      details: 'Streams prompts to model adapters with custom rate-limiting, temperature controls, and structural schemas.'
    },
    {
      id: 'evaluation',
      label: 'EVALUATION',
      sublabel: 'Grounding & Regression',
      icon: <CheckCircle2 className="w-4 h-4 text-[#FFB84D]" />,
      status: 'PROCESSING',
      metrics: 'Acc: 99.4%',
      details: 'Validates response factual accuracy, halluncination score, and format compliance before client delivery.'
    },
    {
      id: 'response',
      label: 'RESPONSE',
      sublabel: 'Streamed Output',
      icon: <MessageSquareCode className="w-4 h-4 text-[#7CFF4F]" />,
      status: 'ACTIVE',
      metrics: 'P95: 185ms',
      details: 'Delivers real-time Server-Sent Events (SSE) token stream with embedded citation metadata.'
    }
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[2];

  return (
    <div className="w-full bg-[#0D1114] border border-[#20282D] rounded-lg p-5 relative overflow-hidden shadow-2xl">
      
      {/* Visual Header Bar */}
      <div className="flex items-center justify-between border-b border-[#20282D] pb-3 mb-5 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-[#7CFF4F] animate-pulse" />
          <span className="text-[#F1F3F4] font-semibold">SYSTEM ARCHITECTURE PIPELINE</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] text-[#5F696F]">
          <span className="w-2 h-2 bg-[#7CFF4F] rounded-full inline-block"></span>
          <span>PIPELINE_STATUS: ONLINE</span>
        </div>
      </div>

      {/* Pipeline Diagram Track */}
      <div className="relative flex flex-col space-y-3.5 my-2">
        {nodes.map((node, index) => {
          const isSelected = selectedNode === node.id;
          return (
            <div key={node.id} className="relative">
              
              {/* Connector line between nodes */}
              {index < nodes.length - 1 && (
                <div className="absolute left-6 top-11 bottom-0 w-[2px] h-4 bg-[#20282D] z-0 flex items-center justify-center">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-[#7CFF4F] rounded-full"
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                  />
                </div>
              )}

              {/* Node Item Card */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedNode(node.id)}
                className={`w-full flex items-center justify-between p-3 rounded-md border text-left transition-all duration-200 z-10 relative ${
                  isSelected
                    ? 'bg-[#11171B] border-[#7CFF4F] shadow-lg shadow-[#7CFF4F]/5 ring-1 ring-[#7CFF4F]/30'
                    : 'bg-[#080A0C]/70 border-[#20282D] hover:border-[#9AA4AA]/40 hover:bg-[#11171B]/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded border ${isSelected ? 'bg-[#0D1114] border-[#7CFF4F]/50' : 'bg-[#0D1114] border-[#20282D]'}`}>
                    {node.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#F1F3F4] tracking-wide flex items-center space-x-2">
                      <span>{node.label}</span>
                      {isSelected && <span className="text-[10px] text-[#7CFF4F] bg-[#7CFF4F]/10 px-1.5 py-0.5 rounded border border-[#7CFF4F]/30">INSPECTING</span>}
                    </div>
                    <div className="text-[11px] text-[#9AA4AA]">{node.sublabel}</div>
                  </div>
                </div>

                <div className="font-mono text-right">
                  <span className="text-[11px] text-[#7CFF4F] bg-[#0D1114] px-2 py-0.5 rounded border border-[#20282D]">
                    {node.metrics}
                  </span>
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Selected Node Telemetry Inspector */}
      <motion.div 
        key={activeNodeData.id}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-5 p-3.5 bg-[#080A0C] border border-[#20282D] rounded-md font-mono text-xs"
      >
        <div className="flex items-center justify-between text-[#5F696F] text-[10px] mb-1.5 border-b border-[#20282D]/60 pb-1">
          <span>// TELEMETRY_INSPECTOR</span>
          <span className="text-[#7CFF4F]">NODE: {activeNodeData.id.toUpperCase()}</span>
        </div>
        <p className="text-[#9AA4AA] text-[11px] leading-relaxed">
          {activeNodeData.details}
        </p>
      </motion.div>

    </div>
  );
};
