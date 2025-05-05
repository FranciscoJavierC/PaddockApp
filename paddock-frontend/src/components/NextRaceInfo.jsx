import React from 'react';

const NextRaceInfo = () => {
  const raceName = 'Miami Grand Prix';
  const raceDate = '4 May 2025';
  const raceTime = '16:00 PST';
  const trackImage = '/assets/circuits/miami-circuit.png';
  const trackFlag = '/assets/flags/USA.png';

  return (
  <div style={styles.cardContainer}>
    {/* HEADER: Next Race Info Row */}
    <div style={styles.headerRow}>
      <p style={styles.round}>Round 6</p>
      <div style={styles.flagTitle}>
        <img src={trackFlag} alt="USA Flag" style={styles.flag} />
        <h2 style={styles.raceName}>{raceName}</h2>
      </div>
      <p style={styles.detail}>{raceDate}</p>
      <p style={styles.detail}>🌤️ 25°C</p>
    </div>

    {/* BOTTOM: Weekend Schedule + Circuit Image */}
    <div style={styles.bottomRow}>
      <div style={styles.column}>
        <h3 style={styles.label}>Weekend Schedule</h3>
        {[
          { name: 'Practice 1', day: 'FRI', time: '12:30 - 13:30' },
          { name: 'Sprint Qualifying', day: 'FRI', time: '16:30 - 17:14' },
          { name: 'Sprint', day: 'SAT', time: '12:00 - 13:00' },
          { name: 'Qualifying', day: 'SAT', time: '16:00 - 17:00' },
          { name: 'Race', day: 'SUN', time: '16:00' },
        ].map((session) => (
          <p key={session.name} style={styles.sessionLine}>
            {session.name} — {session.day} — {session.time}
          </p>
        ))}
      </div>

      <div style={styles.column}>
        <img src={trackImage} alt="Miami Circuit" style={styles.trackImage} />
      </div>
    </div>
  </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: '#111',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
  },
  
  column: {
    flex: 1,
    minWidth: '0',
    padding: '1rem',
    color: '#fff',
  },
  
  label: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  
  detail: {
    fontSize: '1rem',
    color: '#ccc',
    marginBottom: '0.3rem',
  },
  
  sessionLine: {
    fontSize: '0.95rem',
    color: '#ddd',
    marginBottom: '0.3rem',
  },

  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #222',
    marginBottom: '1.5rem',
  },
  
  flagTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  raceName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  
  round: {
    fontSize: '1rem',
    color: '#ccc',
  },
  
  flag: {
    width: '32px',
    height: 'auto',
    borderRadius: '4px',
  },

  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap', // so it doesn't break on mobile
  },
  
  scheduleColumn: {
    flex: 1,
    minWidth: '250px',
  },
  
  trackColumn: {
    flexShrink: 0,
    minWidth: '220px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  trackImage: {
    width: '100%',
    maxWidth: '390px',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default NextRaceInfo;