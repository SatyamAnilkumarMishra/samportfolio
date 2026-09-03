'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EngineeringSnapshot } from '@/components/EngineeringSnapshot';
import { FeaturedSystems } from '@/components/FeaturedSystems';
import { ArchitectureVisualizer } from '@/components/ArchitectureVisualizer';
import { TechStack } from '@/components/TechStack';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { EngineeringNotes } from '@/components/EngineeringNotes';
import { AboutSection } from '@/components/AboutSection';
import { ContactTerminal } from '@/components/ContactTerminal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -70; // offset for fixed header
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'systems', 'stack', 'notes', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const elem = document.getElementById(sec);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080A0C] text-[#F1F3F4] selection:bg-[#7CFF4F] selection:text-[#080A0C]">
      
      {/* Operating System Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main OS Content Canvas */}
      <main className="relative z-10">
        <HeroSection onNavigate={scrollToSection} />
        <EngineeringSnapshot />
        <FeaturedSystems />
        <ArchitectureVisualizer />
        <TechStack />
        <ExperienceTimeline />
        <EngineeringNotes />
        <AboutSection />
        <ContactTerminal />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
