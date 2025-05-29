// src/components/Hero.jsx

import React from 'react';
import './Hero.css'; // optional if you separate styles

export default function Hero() {
  return (
    <header className="hero">
      <img src="/batman-logo.png" alt="Batman Logo" className="logo" />
      <h1>I'm the Night. I'm Sankalp .</h1>
      <p>Full-Stack Developer | Vigilante Coder</p>
    </header>
  );
}
