'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, CheckCircle, Database, Cpu, ShieldCheck, ArrowRight, Activity, Terminal } from 'lucide-react';

interface ArchStage {
  id: string;
  step: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  latency: string;
  throughput: string;
  contract: string;
  details: string;
}

export const ArchitectureVisualizer: React.FC = () => {
  const stages: ArchStage[] = [
    {
      id: 'input',
      step: '01',
      name: 'INPUT',
      type: 'Ingestion Layer',
      icon: <Terminal className="w-4 h-4 text-[#7CFF4F]" />,
      latency: '2.4ms',
      throughput: '1.2k req/s',
      contract: 'JSON payload validation & rate limiting',
      details: 'Ingests asynchronous HTTP/gRPC requests, sanitizes prompt text, and injects session UUID traces.'
    },
    {
      id: 'processing',
      step: '02',
      name: 'PROCESSING',
      type: 'Preprocessing & AST',
      icon: <Sliders className="w-4 h-4 text-[#53D8FF]" />,
      latency: '8.1ms',
      throughput: '850 pgs/min',
      contract: 'Markdown AST chunking & metadata tagging',
      details: 'Parses document layouts into AST structures, extracts tabular matrices, and creates token-bounded chunks.'
    },
    {
      id: 'storage',
      step: '03',
      name: 'STORAGE',
      type: 'Vector & Relational DB',
      icon: <Database className="w-4 h-4 text-[#7CFF4F]" />,
      latency: '14.2ms',
      throughput: '10M vectors',
      contract: 'Transactional ACID & HNSW vector indexing',
      details: 'Stores dense embeddings in Qdrant HNSW collections and relational metadata in PostgreSQL.'
    },
    {
      id: 'retrieval',
      step: '04',
      name: 'RETRIEVAL',
      type: 'Hybrid Search & RRF',
      icon: <Database className="w-4 h-4 text-[#53D8FF]" />,
      latency: '32.0ms',
      throughput: '99.1% recall',
      contract: 'Reciprocal Rank Fusion (Dense + Sparse)',
      details: 'Combines dense vector similarity with BM25 lexical ranking followed by Cross-Encoder re-ranking.'
    },
    
    {
      id: 'evaluation',
      step: '06',
      name: 'EVALUATION',
      type: 'Grounding & Guardrails',
      icon: <ShieldCheck className="w-4 h-4 text-[#FFB84D]" />,
      latency: '12.5ms',
      throughput: '99.4% precision',
      contract: 'Hallucination check & PII redaction',
      details: 'Executes programmatic factual alignment, semantic distance scoring, and policy assertions.'
    },
    {
      id: 'output',
      step: '07',
      name: 'OUTPUT',
      type: 'SSE Streaming Endpoint',
      icon: <CheckCircle className="w-4 h-4 text-[#7CFF4F]" />,
      latency: '1.1ms',
      throughput: 'Zero dropped streams',
      contract: 'Server-Sent Events with citation payloads',
      details: 'Delivers real-time token streams directly to the requesting application with full source provenance.'
    }
  ];

  const [activeStage, setActiveStage] = useState<ArchStage>(stages[3]);

  return (
    <section id="systems" className="py-20 border-b border-[#20282D]/80 bg-[#080A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#20282D] pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-[#7CFF4F] tracking-widest uppercase mb-1">
              02 // SYSTEM PIPELINE VISUALIZER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F4] tracking-tight font-sans">
              ENTERPRISE AI PIPELINE ARCHITECTURE
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9AA4AA] flex items-center space-x-2 bg-[#0D1114] px-3 py-1.5 rounded border border-[#20282D]">
            <Activity className="w-3.5 h-3.5 text-[#7CFF4F] animate-pulse" />
            <span>CLICK STAGE NODE TO INSPECT CONTRACT</span>
          </div>
        </div>

        {/* Pipeline Horizontal Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 relative">
          {stages.map((stg, i) => {
            const isSelected = activeStage.id === stg.id;
            return (
              <div key={stg.id} className="relative">
                
                {/* Node Box */}
                <button
                  onClick={() => setActiveStage(stg)}
                  className={`w-full h-full text-left p-3.5 rounded-md border font-mono transition-all duration-200 flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-[#11171B] border-[#7CFF4F] shadow-lg shadow-[#7CFF4F]/10 ring-1 ring-[#7CFF4F]/30'
                      : 'bg-[#0D1114] border-[#20282D] hover:border-[#9AA4AA]/50 hover:bg-[#11171B]/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#5F696F]">STAGE_{stg.step}</span>
                    {isSelected && <span className="w-1.5 h-1.5 bg-[#7CFF4F] rounded-full animate-ping"></span>}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {stg.icon}
                      <span className="font-bold text-xs text-[#F1F3F4]">{stg.name}</span>
                    </div>
                    <div className="text-[10px] text-[#9AA4AA] line-clamp-1">{stg.type}</div>
                  </div>

                  <div className="text-[10px] text-[#7CFF4F] bg-[#080A0C] px-2 py-0.5 rounded border border-[#20282D] text-center">
                    {stg.latency}
                  </div>
                </button>

                {/* Arrow connector between nodes (lg screens) */}
                {i < stages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#20282D]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5F696F]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Inspector Panel */}
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0D1114] border border-[#20282D] rounded-lg p-6 font-mono text-xs shadow-2xl space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#20282D] pb-3 gap-2">
            <div className="flex items-center space-x-3">
              <span className="bg-[#7CFF4F] text-[#080A0C] font-bold px-2 py-0.5 rounded text-[11px]">
                STAGE {activeStage.step}
              </span>
              <span className="text-base font-bold text-[#F1F3F4]">{activeStage.name} // {activeStage.type}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px]">
              <span className="text-[#9AA4AA]">LATENCY: <strong className="text-[#7CFF4F]">{activeStage.latency}</strong></span>
              <span className="text-[#9AA4AA]">THROUGHPUT: <strong className="text-[#53D8FF]">{activeStage.throughput}</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-sans text-sm">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#5F696F] uppercase">// STAGE EXECUTION CONTRACT</div>
              <div className="bg-[#080A0C] border border-[#20282D] p-3 rounded text-[#7CFF4F] font-mono text-xs">
                {activeStage.contract}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-[#5F696F] uppercase">// TELEMETRY SUMMARY</div>
              <p className="text-[#9AA4AA] text-xs leading-relaxed">
                {activeStage.details}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
