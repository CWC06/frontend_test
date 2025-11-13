import React from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../data/content.js';
import '../styles/WorkflowSection.css';

const WorkflowSection = () => {
  return (
    <section id="workflow">
      <h2 className="section-title">Your entire analytics workflow synced</h2>
      <p className="section-subtitle">
        ShotSync makes it effortless to go from live data capture to ready-to-share reports without juggling tabs, exports, or
        manual clean-up.
      </p>
      <div className="workflow-timeline">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.step}
            className="workflow-step"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <span className="workflow-number">{step.step}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSection;
