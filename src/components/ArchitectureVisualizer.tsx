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
