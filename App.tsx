import React, { useRef } from 'react';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full min-h-screen bg-white selection:bg-nikeBlack selection:text-white">
      {/* Navbar - Simple Nike Logo Placeholder or Menu would go here, kept minimal */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 pointer-events-none flex justify-between items-center mix-blend-difference text-white">
         <span className="font-heading font-bold text-xl tracking-tighter uppercase">AS.</span>
      </nav>

      <Hero scrollToContent={scrollToContent} />
      
      <Summary ref={contentRef} />
      
      <ExperienceSection />
      
      <SkillsSection />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 border-b border-gray-200 pb-8">
            <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-nikeBlack">Education</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
           <div className="bg-nikeLightGray p-10 rounded-sm">
             <h3 className="font-heading text-2xl font-bold uppercase text-nikeBlack mb-2">Management and Science University</h3>
             <p className="text-nikeBlack font-bold text-sm uppercase tracking-wide">Bachelor in Computer Forensic (Hons)</p>
             <p className="text-nikeGray text-sm mt-4 font-bold">Sep 2021 - Jan 2024</p>
           </div>
           <div className="bg-nikeLightGray p-10 rounded-sm">
             <h3 className="font-heading text-2xl font-bold uppercase text-nikeBlack mb-2">SMK Dato Hamzah</h3>
             <p className="text-nikeBlack font-bold text-sm uppercase tracking-wide">Secondary Education</p>
             <p className="text-nikeGray text-sm mt-4 font-bold">2014 - 2018</p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;