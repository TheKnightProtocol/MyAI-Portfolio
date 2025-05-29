// src/App.jsx
import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2025 Gotham Coder. Vigilantly built with React.</p>
      </footer>
    </>
  );
}

export default App;
