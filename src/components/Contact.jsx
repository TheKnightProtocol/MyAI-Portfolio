// src/components/Contact.jsx

import React from 'react';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Signal the Bat</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Signal</button>
      </form>
    </section>
  );
}
