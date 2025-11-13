import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="#hero" className="footer-logo">
            ShotSync
          </a>
          <p>Data-driven basketball intelligence for programs that play fast and win smarter.</p>
        </div>
        <div className="footer-links">
          <a href="#platform">Platform</a>
          <a href="#insights">Insights</a>
          <a href="#workflow">Workflow</a>
          <a href="mailto:hello@shotsync.com">Contact</a>
        </div>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} ShotSync Analytics. All rights reserved.</span>
        <div className="footer-meta-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
