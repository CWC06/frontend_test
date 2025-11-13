import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CTASection.css';

const CTASection = () => {
  return (
    <section id="demo" className="cta-section">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to sync your next win?</h2>
        <p>
          Schedule a personalized walkthrough with our performance analysts and see how ShotSync adapts to your playbook,
          roster, and data stack in under a week.
        </p>
        <div className="cta-actions">
          <a className="cta-button" href="mailto:hello@shotsync.com">
            Book a live demo
          </a>
          <a className="cta-button secondary" href="#hero">
            Explore features
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
