const metrics = [
  { value: '120+', label: 'Tracked Performance Metrics' },
  { value: '24/7', label: 'Live Stat Coverage' },
  { value: '48hrs', label: 'Turnaround for Deep Dives' },
];

const orbitingStats = [
  { label: 'PTS', value: '27.4' },
  { label: 'AST', value: '8.1' },
  { label: 'EFF', value: '+18' },
  { label: '3P%', value: '42' },
  { label: 'Speed', value: '32 km/h' },
];

const App = () => {
  return (
    <div className="app">
      <main className="hero">
        <div className="hero__content">
          <span className="hero__eyebrow">Pro Analytics for the Modern Game</span>
          <h1 className="hero__title">Unlock Every Possession with ShotSync</h1>
          <p className="hero__subtitle">
            ShotSync empowers coaches and athletes with real-time, pro-level basketball intelligence. Track momentum live,
            decode opponent tendencies, and transform player development through immersive data storytelling.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">
              Request a Demo
            </a>
            <a className="btn btn--ghost" href="#profiles">
              Explore Player Profiles
            </a>
          </div>
          <div className="hero__metrics">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hologram">
            <div className="hologram__grid" />
            <div className="hologram__player" />
            <div className="hologram__glow" />
            <div className="hologram__base" />
            <div className="hologram__ring">
              {orbitingStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-chip"
                  style={{ '--index': index, '--total': orbitingStats.length }}
                >
                  <span className="stat-chip__label">{stat.label}</span>
                  <span className="stat-chip__value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
