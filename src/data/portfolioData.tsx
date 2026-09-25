export interface CaseStudy {
  problem: string;
  requirements: string[];
  architectureOverview: string;
  engineeringDecisions: { title: string; decision: string; impact: string }[];
  implementationDetails: string;
  codeSnippet?: { language: string; filename: string; code: string };
  challenges: string[];
  results: { metric: string; value: string; context: string }[];
  lessonsLearned: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
}

export interface TechDomain {
  category: string;
  code: string;
  description: string;
  items: string[];
}

export interface TimelineItem {
  year: string;
  role: string;
  area: string;
  description: string;
  keyDeliverables: string[];
  techUsed: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const PORTFOLIO_DATA = {
  engineer: {
    name: 'Satyam Mishra',
    title: 'Software Engineer',
    headline: 'I BUILD INTELLIGENT SYSTEMS.',
    subheadline: 'Software engineer focused on AI systems, backend infrastructure, LLM applications, and developer tooling.',
    status: 'OPEN_TO_OPPORTUNITIES',
    location: 'Remote / Global',
    availability: 'AVAILABLE',
    version: '2.4.0',
    terminalSnapshot: {
      role: 'Software Engineer',
      focus: ['AI Systems', 'Backend', 'LLM Infrastructure', 'System Design'],
      languages: ['Python', 'Java', 'C++', 'SQL'],
      currentlyBuilding: 'LLM Evaluation Infrastructure',
      status: 'Open to Opportunities'
    },
    socialLinks: {
      github: 'https://github.com/SatyamAnilkumarMishra',
      linkedin: 'https://linkedin.com/in/satyam-mishra-56b636287',
      email: 'satyamsam2612@gmail.com',
      resume: '/resume.pdf'
    }
  },

  projects: [
    {
      id: 'llm-eval-harness',
      number: '01',
      title: 'LLM Evaluation Harness',
      tagline: 'Framework-independent quality & regression testing engine',
      description: 'A lightweight, zero-dependency framework-independent evaluation system built to measure LLM output quality, hallucination rate, prompt regression, and latency profiles across model updates.',
      technologies: ['Python', 'LLM', 'Evaluation', 'CLI', 'PyTest', 'AsyncIO'],
      githubUrl: 'https://github.com/satyam-mishra/llm-eval-harness',
      liveUrl: 'https://eval-harness-demo.satyam.dev',
      caseStudy: {
        problem: 'Commercial LLM frameworks introduce heavy dependency trees and black-box abstractions, making it difficult to detect subtle prompt regressions, semantic drift, and latency anomalies deterministically across model version upgrades.',
        requirements: [
          'Zero-framework dependency core execution loop with modular metric plugins',
          'Support for programmatic semantic similarity, G-Eval rubric evaluation, and factual grounding checks',
          'Concurrent asynchronous API evaluation capable of processing >500 test cases/minute',
          'Automated CI/CD integration outputting JUnit XML and structured JSON artifacts'
        ],
        architectureOverview: 'Client Benchmark Suite → Async Task Dispatcher → Dynamic Model Adapter (OpenAI / Anthropic / Local Ollama) → Evaluation Pipeline (Exact Match + Embeddings + LLM-as-Judge) → Aggregator & Regression Visualizer.',
        engineeringDecisions: [
          {
            title: 'Custom Async Worker Pool over Celery',
            decision: 'Implemented native Python asyncio queue management rather than heavy Redis/Celery queue dependencies.',
            impact: 'Reduced container footprint by 85% and startup time from 12s to under 300ms.'
          },
          {
            title: 'Hierarchical Assertion Engine',
            decision: 'Divided evaluation into deterministic checks (regex, JSON schema, substring) before invoking expensive LLM-as-a-judge evaluators.',
            impact: 'Reduced total evaluation token cost by 64% while maintaining 99.2% failure detection accuracy.'
          }
        ],
        implementationDetails: 'The core engine uses a clean pipeline pattern where each test case passes through an isolated evaluation context. Async execution is controlled via token bucket rate-limiters to satisfy model provider quotas.',
        codeSnippet: {
          language: 'python',
          filename: 'eval_runner.py',
          code: `class EvaluationRunner:
    def __init__(self, model_adapter: BaseAdapter, metrics: List[BaseMetric]):
        self.adapter = model_adapter
        self.metrics = metrics
        
    async def evaluate_sample(self, sample: TestCase) -> EvalResult:
        start_t = time.perf_counter()
        response = await self.adapter.generate(sample.prompt)
        latency = time.perf_counter() - start_t
        
        scores = {}
        for metric in self.metrics:
            scores[metric.name] = await metric.score(
                prompt=sample.prompt,
                response=response.text,
                expected=sample.expected
            )
            
        return EvalResult(
            case_id=sample.id,
            passed=all(s >= metric.threshold for metric, s in scores.items()),
            scores=scores,
            latency_ms=round(latency * 1000, 2)
        )`
        },
        challenges: [
          'Handling LLM-as-a-Judge non-determinism required calibrated temperature=0 sampling and structured JSON schema enforcement.',
          'Preventing rate-limit throttling during batch benchmark runs without bottlenecking throughput.'
        ],
        results: [
          { metric: 'Regression Detection Rate', value: '99.4%', context: 'Identified prompt degradation before staging release' },
          { metric: 'Eval Execution Speed', value: '520 items/min', context: 'Parallel async benchmark processing' },
          { metric: 'Token Cost Reduction', value: '-64%', context: 'Via tiered deterministic pre-filtering' }
        ],
        lessonsLearned: [
          'Deterministic heuristics should always guard non-deterministic AI evaluations.',
          'Minimal framework footprints provide far superior long-term debuggability in critical production infrastructure.'
        ]
      }
    },
