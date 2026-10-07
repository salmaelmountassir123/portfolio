import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import BeyondTheStack from './sections/BeyondTheStack';
import GLPISpotlight from './sections/GLPISpotlight';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import CVModal from './components/ui/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Top Navbar */}
      <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <BeyondTheStack />
        <GLPISpotlight />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
