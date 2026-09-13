import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import BeyondTheStack from './sections/BeyondTheStack';
import Projects from './sections/Projects';
import GLPISpotlight from './sections/GLPISpotlight';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import CVModal from './components/ui/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Sticky Minimal Navbar */}
      <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <BeyondTheStack />
        <Projects />
        <GLPISpotlight />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Full CV Preview & PDF Print Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
