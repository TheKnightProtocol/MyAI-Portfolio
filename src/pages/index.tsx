import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-batman-black text-white scroll-smooth">
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <About />
        </section>

        <section id="skills" className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <Skills />
        </section>

        <section id="services" className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <Services />
        </section>

        <section id="projects" className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <Projects />
        </section>

        <section id="contact" className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
