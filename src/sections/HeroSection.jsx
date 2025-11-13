import React from 'react';
import { motion } from 'framer-motion';
import CourtCanvas from '../components/CourtCanvas.jsx';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="hero-kicker">Live + Predictive Basketball Intelligence</div>
          <h1>
            Power every possession with <span className="gradient-text">ShotSync</span>
          </h1>
          <p>
            Combine live stat tracking, predictive analytics, and pro-level player insights on a single
            court intelligence platform built for coaches, teams, and elite hoopers.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#demo">Start tracking now</a>
            <a className="cta-button secondary" href="#platform">See how it works</a>
          </div>
          <motion.div
            className="hero-trust"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Trusted by 200+ collegiate programs and counting.
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <CourtCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
