// ── App.jsx — Root component ──
import React from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Journey    from './components/Journey';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
