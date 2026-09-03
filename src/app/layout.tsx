import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Satyam Mishra — Senior Software & AI Engineer',
  description: 'Personal engineering workstation portfolio of Satyam Mishra. Software engineer focused on AI systems, backend infrastructure, LLM applications, and developer tooling.',
  keywords: ['Satyam Mishra', 'Software Engineer', 'AI Systems', 'LLM Infrastructure', 'Backend Engineering', 'FastAPI', 'Python', 'Vector Search', 'RAG'],
  authors: [{ name: 'Satyam Mishra' }],
  openGraph: {
    title: 'Satyam Mishra — Senior Software & AI Engineer',
    description: 'Software engineer focused on AI systems, backend infrastructure, LLM applications, and developer tooling.',
    url: 'https://satyam-mishra.dev',
    siteName: 'Satyam Mishra Engineering OS',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#080A0C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#080A0C] text-[#F1F3F4] antialiased">
        {children}
      </body>
    </html>
  );
}
