import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamSummary = [
  { label: 'Offensive Rating', value: '118.4', trend: '+6.2 vs avg' },
  { label: 'Defensive Rating', value: '103.1', trend: '-4.7 vs avg' },
  { label: 'Pace', value: '97.8', trend: 'Fast break +12 pts' },
  { label: 'Assist Ratio', value: '67%', trend: 'Ball shared 24 ast' },
];

const keyInsights = [
  {
    title: 'Corner triples unlocked the run',
    detail:
      '11 of 14 corner attempts generated from drive-and-kick actions. AI recommends repeating stagger-screen entry to maintain spacing.',
  },
  {
    title: 'Second unit squeezed possessions',
    detail:
      'Bench groups forced 6 turnovers in 7 minutes, leading to a +14 differential. Consider extending the press into late 3rd quarter.',
  },
  {
    title: 'Switch coverage optimized vs star',
    detail:
      'Primary scorer held to 0.68 PPP when switched by long wings. Maintain cross-matches in next outing.',
  },
];

const lineupAnalysis = [
  { unit: 'Jackson / Reid / Moore / Ellis / Kumar', minutes: '14:32', net: '+18', highlight: 'Best blitz coverage' },
  { unit: 'Jackson / Daniels / Ellis / Kumar / Chen', minutes: '08:47', net: '+6', highlight: 'Elite transition pace' },
  { unit: 'Reid / Moore / Carter / Lewis / Shah', minutes: '05:58', net: '-5', highlight: 'Struggled vs zone' },
];

const shotChartData = [
  { id: 1, x: 18, y: 72, made: true },
  { id: 2, x: 44, y: 60, made: false },
  { id: 3, x: 68, y: 35, made: true },
  { id: 4, x: 24, y: 30, made: true },
  { id: 5, x: 52, y: 18, made: false },
  { id: 6, x: 82, y: 50, made: true },
  { id: 7, x: 40, y: 78, made: true },
  { id: 8, x: 60, y: 42, made: false },
];

const scoreDifferential = [
  { label: 'Q1', value: 5 },
  { label: 'Q2', value: 9 },
  { label: 'Q3', value: 4 },
  { label: 'Q4', value: 12 },
];

function PostGameDashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="brand">
          <span className="brand-icon">⛹️‍♂️</span>
          <span>ShotSync</span>
        </div>
        <nav>
          <Link to="/" className="ghost-link">
            Return to Landing
          </Link>
          <button type="button" className="primary-btn small">Share Report</button>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="scoreboard">
          <div className="scoreboard-meta">
            <span className="pill">Post-Game • 12 Mar 2024</span>
            <h1>Pacific Blaze vs. Metro Monarchs</h1>
            <p>Instant coach view generated the moment the final buzzer sounded.</p>
          </div>
          <motion.div
            className="score-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="team-score home">
              <span className="team-name">Pacific Blaze</span>
              <span className="score">98</span>
            </div>
            <div className="score-status">
              <span className="result">Final</span>
              <span className="differential">+12</span>
            </div>
            <div className="team-score away">
              <span className="team-name">Metro Monarchs</span>
              <span className="score">86</span>
            </div>
          </motion.div>
        </section>

        <section className="team-summary">
          <div className="section-head compact">
            <h2>Team Summary</h2>
            <p>Efficiency signals to headline the debrief.</p>
          </div>
          <div className="summary-grid">
            {teamSummary.map((item) => (
              <motion.article
                key={item.label}
                className="summary-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              >
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
                <span className="trend">{item.trend}</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="shot-chart-section">
          <div className="section-head compact">
            <h2>Shot Chart</h2>
            <p>Interactive court heat for made and missed attempts.</p>
          </div>
          <div className="chart-wrapper">
            <div className="court-visual">
              {shotChartData.map((shot) => (
                <motion.span
                  key={shot.id}
                  className={`shot-dot ${shot.made ? 'made' : 'missed'}`}
                  style={{ left: `${shot.x}%`, top: `${shot.y}%` }}
                  whileHover={{ scale: 1.4 }}
                />
              ))}
            </div>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="dot made" /> Made
              </span>
              <span className="legend-item">
                <span className="dot missed" /> Missed
              </span>
            </div>
          </div>
        </section>

        <section className="insights">
          <div className="section-head compact">
            <h2>AI Key Insights</h2>
            <p>Generated by ShotSync Vision moments after the horn.</p>
          </div>
          <div className="insight-grid">
            {keyInsights.map((insight) => (
              <motion.article
                key={insight.title}
                className="insight-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                whileHover={{ x: 6 }}
              >
                <h3>{insight.title}</h3>
                <p>{insight.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="score-differential">
          <div className="section-head compact">
            <h2>Score Differential</h2>
            <p>Quarter by quarter separation against opponent.</p>
          </div>
          <div className="differential-grid">
            {scoreDifferential.map((point) => (
              <div key={point.label} className="differential-bar">
                <span className="bar-label">{point.label}</span>
                <div className="bar-track">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(point.value * 6, 4)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="bar-value">+{point.value}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lineup-analysis">
          <div className="section-head compact">
            <h2>Lineup Analysis</h2>
            <p>Combinations ranked by net rating and tactical fit.</p>
          </div>
          <div className="lineup-grid">
            {lineupAnalysis.map((lineup) => (
              <motion.article
                key={lineup.unit}
                className="lineup-card"
                whileHover={{ y: -8, rotateX: 3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <span className="unit">{lineup.unit}</span>
                <div className="lineup-meta">
                  <span>{lineup.minutes} on court</span>
                  <span className={`net ${Number(lineup.net) >= 0 ? 'positive' : 'negative'}`}>
                    {Number(lineup.net) >= 0 ? '+' : ''}
                    {lineup.net}
                  </span>
                </div>
                <p>{lineup.highlight}</p>
                <button type="button" className="ghost-link">
                  View possessions
                </button>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default PostGameDashboard;
