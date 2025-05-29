// src/components/Projects.jsx

import React from 'react';

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Missions</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Dark Web Detector</h3>
          <p>Tracks criminal activity in the shadows of the internet.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-item">
          <h3>Wayne Enterprises Dashboard</h3>
          <p>A corporate-grade admin panel with sleek Gotham-style UI.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-item">
          <h3>Bat-Signal Notifier</h3>
          <p>A real-time notification app to respond instantly when Gotham needs me.</p>
          <a href="#">View Project</a>
        </div>
      </div>
    </section>
  );
}
