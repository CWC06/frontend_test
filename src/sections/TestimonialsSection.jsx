import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/content.js';
import '../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <h2 className="section-title">What coaches and players are saying</h2>
      <p className="section-subtitle">
        ShotSync powers winning cultures from pre-season scouting to post-game player development.
      </p>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <p>“{item.quote}”</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
