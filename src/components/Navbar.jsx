import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Insights', href: '#insights' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Testimonials', href: '#testimonials' }
];

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <motion.div
        className="nav-bar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <a href="#hero" className="logo">
          <span className="logo-icon">⛹️‍♂️</span>
          ShotSync
        </a>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a className="cta-button secondary" href="#demo">Log in</a>
          <a className="cta-button" href="#demo">Book a demo</a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
