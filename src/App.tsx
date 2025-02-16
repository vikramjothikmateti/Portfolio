
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Skills_copy from './components/Skills copy';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Skills_copy />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />    
    </div>
  );
}

export default App;