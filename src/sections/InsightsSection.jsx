import React from 'react';
import { motion } from 'framer-motion';
import { insightHighlights } from '../data/content.js';
import '../styles/InsightsSection.css';

const InsightsSection = () => {
  return (
    <section id="insights">
      <h2 className="section-title">Insights that change the way teams prepare</h2>
      <p className="section-subtitle">
        Transform raw box score data into intuitive dashboards, matchup-ready scouting cards, and player journeys that ignite
        performance.
      </p>
      <div className="insights-grid">
        {insightHighlights.map((item, index) => (
          <motion.div
            key={item.label}
            className="insight-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: index * 0.18, type: 'spring', stiffness: 120 }}
            style={{ borderColor: `${item.accent}55` }}
          >
            <span className="insight-value" style={{ color: item.accent }}>
              {item.value}
            </span>
            <h3>{item.label}</h3>
            <p>{item.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
