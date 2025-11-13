import React from 'react';
import { motion } from 'framer-motion';
import { platformFeatures } from '../data/content.js';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="platform">
      <h2 className="section-title">Built for the pace of modern basketball</h2>
      <p className="section-subtitle">
        From live possession tagging to predictive scouting reports, ShotSync keeps coaches, players, and analysts locked in
        on the moments that matter.
      </p>
      <div className="features-grid">
        {platformFeatures.map((feature, index) => (
          <motion.article
            key={feature.title}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <div className="feature-icon" aria-hidden>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="feature-link" type="button">
              Learn more
              <span aria-hidden>→</span>
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
