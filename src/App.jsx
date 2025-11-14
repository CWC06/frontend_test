import { useState } from 'react';
import { motion } from 'framer-motion';
import CourtBackground from './components/CourtBackground.jsx';

const heroStats = [
  { label: 'Teams trusting ShotSync', value: '120+' },
  { label: 'Real-time events tracked', value: '15K+' },
  { label: 'Player reports delivered', value: '48K+' },
];

const features = [
  {
    title: 'Live Game Command Center',
    description:
      'Track every possession with millisecond precision, capture advanced shot charts, and push insights to your bench in real-time.',
    highlight: 'Live stat tracking with predictive cues',
  },
  {
    title: 'Player DNA Profiles',
    description:
      'Build dynamic dossiers that blend performance trends, biometric cues, and film annotations to guide development conversations.',
    highlight: '360° perspectives for every athlete',
  },
  {
    title: 'Competitive Intelligence',
    description:
      'Layer scouting notes over opponent tendencies, then simulate matchups to surface the winning adjustments before tip-off.',
    highlight: 'AI-assisted matchup simulations',
  },
];

const testimonials = [
  {
    quote:
      'ShotSync changed the pace of our decision making. We spot momentum swings three possessions sooner and close games with confidence.',
    name: 'Coach Elena Martinez',
    role: 'Head Coach, Pacific Blaze',
  },
  {
    quote:
      'My profile updates after every workout. I share it with scouts and can actually show how my pull-up game is evolving week to week.',
    name: 'Jordan Price',
    role: 'All-Conference Guard',
  },
];

const packages = [
  {
    name: 'Program Suite',
    price: 'Let’s Talk',
    perks: ['Unlimited teams & staff accounts', 'Live game capture hardware integration', 'On-site onboarding'],
  },
  {
    name: 'Pro Player',
    price: '$79/mo',
    perks: ['Personalized growth sprints', 'Shot quality & efficiency index', 'Agent-ready highlight data drops'],
    accent: true,
  },
  {
    name: 'Academy',
    price: '$29/mo',
    perks: ['Practice automation templates', 'Coach-to-player feedback loops', 'Progress badges & gamified goals'],
  },
];

function App() {
  const [selectedPackage, setSelectedPackage] = useState('Pro Player');

  return (
    <div className="app-shell">
      <CourtBackground />
      <header className="top-nav">
        <div className="brand">
          <span className="brand-icon">⛹️‍♂️</span>
          <span>ShotSync</span>
        </div>
        <nav>
          <a href="#features">Platform</a>
          <a href="#profiles">Profiles</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="cta-link">Request Demo</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="pill">Analytics engineered for basketball evolution</span>
            <h1>
              Sync every shot, storyline, and split. <span className="accent">Own the court.</span>
            </h1>
            <p>
              ShotSync combines live stat tracking, computer-vision reads, and narrative-ready reporting so your program can out-think and outplay every opponent.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="primary-btn" aria-label="Request a ShotSync demo">
                Request Demo
              </a>
              <a href="#features" className="ghost-btn" aria-label="Explore ShotSync platform features">
                Explore Platform
              </a>
            </div>
            <div className="hero-stats">
              {heroStats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 12 }}
                  className="stat-card"
                >
                  <span className="value">{item.value}</span>
                  <span className="label">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="feature-grid" id="features">
          <div className="section-head">
            <span className="pill">Platform Intelligence</span>
            <h2>Turn raw numbers into competitive tempo.</h2>
            <p>
              We capture more context on every possession so your staff can collaborate, correct, and celebrate faster than ever before.
            </p>
          </div>
          <div className="grid">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, rotateX: 3 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="highlight">{feature.highlight}</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="profiles" id="profiles">
          <div className="profiles-visual">
            <motion.div
              className="player-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="player-header">
                <span className="player-name">Aaliyah Brooks</span>
                <span className="player-role">Wing | ShotSync Index 94</span>
              </div>
              <div className="player-metrics">
                <div>
                  <span className="metric-label">Catch & Shoot</span>
                  <span className="metric-value">68% eFG</span>
                </div>
                <div>
                  <span className="metric-label">Rim Pressure</span>
                  <span className="metric-value">+12 touches</span>
                </div>
                <div>
                  <span className="metric-label">Defensive Impact</span>
                  <span className="metric-value">3.9 deflections</span>
                </div>
              </div>
              <div className="progress">
                <span style={{ width: '82%' }} />
                <span style={{ width: '68%' }} />
                <span style={{ width: '74%' }} />
              </div>
              <p className="player-note">
                Automated clips and opponent scouting cues update within minutes of upload—shareable with agents, scouts, and trainers.
              </p>
            </motion.div>
          </div>
          <div className="profiles-copy">
            <span className="pill">Player & Coach Experiences</span>
            <h2>Individual journeys that coaches can trust.</h2>
            <p>
              Give every athlete a living profile that highlights what changed since last session. Layer in shot quality, biomechanics, and coaching feedback loops to accelerate development.
            </p>
            <ul>
              <li>
                <span className="bullet" />AI-assisted progress narratives designed for recruiting conversations.
              </li>
              <li>
                <span className="bullet" />Coaches annotate, players respond, ShotSync keeps everyone aligned in real-time.
              </li>
              <li>
                <span className="bullet" />Gamified milestones spark buy-in without sacrificing performance focus.
              </li>
            </ul>
            <a href="#contact" className="text-link">
              See how profiles evolve in season →
            </a>
          </div>
        </section>

        <section className="immersive" id="immersive">
          <div className="section-head">
            <span className="pill">Immersive Insights</span>
            <h2>Command the game from tip-off to the final buzzer.</h2>
            <p>
              Layer live timelines, predictive alerts, and tactile overlays across your existing workflows.
            </p>
          </div>
          <div className="immersive-grid">
            <motion.div
              className="immersive-card"
              whileHover={{ rotateY: 8, translateY: -12 }}
              transition={{ type: 'spring', stiffness: 160, damping: 14 }}
            >
              <h3>Rhythm Radar</h3>
              <p>
                Surface surges before the crowd senses them. Rhythm Radar monitors pace, spacing, and fatigue to recommend rotation tweaks in real-time.
              </p>
            </motion.div>
            <motion.div
              className="immersive-card"
              whileHover={{ rotateY: -8, translateY: -12 }}
              transition={{ type: 'spring', stiffness: 160, damping: 14 }}
            >
              <h3>Shot Storylines</h3>
              <p>
                Auto-generate film reels and narrative soundbites for every shot profile. Export to your next scout or share instantly with fans.
              </p>
            </motion.div>
            <motion.div className="immersive-card pulse-card" animate={{ scale: [1, 1.03, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
              <h3>Bench Mode</h3>
              <p>
                Tablet-friendly command hub that syncs with your staff, delivering smart prompts for substitutions, ATOs, and defensive shifts.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="section-head">
            <span className="pill">Trusted Voices</span>
            <h2>Programs and players that win with ShotSync.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <motion.blockquote
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <p>“{testimonial.quote}”</p>
                <footer>
                  <span className="name">{testimonial.name}</span>
                  <span className="role">{testimonial.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-head">
            <span className="pill">Plans</span>
            <h2>Scale ShotSync to your program’s ambition.</h2>
            <p>Choose a package and we’ll tailor onboarding, integrations, and success metrics to your game model.</p>
          </div>
          <div className="pricing-grid">
            {packages.map((pkg) => (
              <motion.article
                key={pkg.name}
                className={`pricing-card ${pkg.accent ? 'accent' : ''} ${selectedPackage === pkg.name ? 'active' : ''}`}
                onMouseEnter={() => setSelectedPackage(pkg.name)}
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              >
                <div className="card-top">
                  <h3>{pkg.name}</h3>
                  <span className="price">{pkg.price}</span>
                </div>
                <ul>
                  {pkg.perks.map((perk) => (
                    <li key={perk}>
                      <span className="bullet" />{perk}
                    </li>
                  ))}
                </ul>
                <button type="button" className="select-btn">
                  {pkg.accent ? 'Start Trial' : 'Talk with Us'}
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to sync your program?</h2>
            <p>
              Share a few details and our analytics architects will craft a launch plan tailored to your season goals.
            </p>
            <form className="contact-form">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Jordan Blake" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@program.com" />
              </div>
              <div className="input-group full">
                <label htmlFor="message">What are you focused on this season?</label>
                <textarea id="message" name="message" rows="3" placeholder="Building out live capture..." />
              </div>
              <button type="submit" className="primary-btn submit-btn">
                Book My Session
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="brand-icon">⛹️‍♂️</span>
          <span>ShotSync</span>
        </div>
        <p>Fueling basketball breakthroughs with data that speaks coach, player, and program.</p>
        <div className="footer-links">
          <a href="#hero">Back to top</a>
          <a href="#pricing">Packages</a>
          <a href="mailto:hello@shotsync.com">hello@shotsync.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
