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
    <div style={styles.scheduleAndImage}>
    {/* Schedule Box */}
      <div style={styles.scheduleBox}>
        <h3 style={styles.label}>Weekend Schedule</h3>
        {[
          { name: 'Practice 1', day: 'FRI', time: '12:30 - 13:30' },
          { name: 'Sprint Qualifying', day: 'FRI', time: '16:30 - 17:14' },
          { name: 'Sprint', day: 'SAT', time: '12:00 - 13:00' },
          { name: 'Qualifying', day: 'SAT', time: '16:00 - 17:00' },
          { name: 'Race', day: 'SUN', time: '16:00' },
        ].map((session) => (
          <div style={styles.scheduleRow} key={session.name}>
            <span style={styles.sessionName}>{session.name}</span>
            <span style={styles.sessionDay}>{session.day}</span>
            <span style={styles.sessionTime}>{session.time}</span>
          </div>
        ))}
      </div>

      {/* Circuit Image aligned right */}
      <div style={styles.trackColumn}>
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
    padding: '1.2 rem 1.5 rem',
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
    fontSize: '1.05rem',
    color: '#ddd',
    marginBottom: '0.15rem',
  },

  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #222',
    marginBottom: '1rem',
  },
  
  flagTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  raceName: {
    fontSize: '1.8rem',
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

  scheduleBox: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  
  scheduleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.6rem 1rem',
    backgroundColor: '#222',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
  },
  
  sessionName: {
    flex: 2,
    textTransform: 'uppercase',
  },
  
  sessionDay: {
    flex: 1,
    textAlign: 'center',
    color: '#bbb',
  },
  
  sessionTime: {
    flex: 2,
    textAlign: 'center',
    backgroundColor: '#333',
    padding: '0.3rem 0.7rem',
    borderRadius: '12px',
  },
  scheduleAndImage: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
    flexWrap: 'wrap', // responsive
    marginTop: '1rem',
  },
  
  trackColumn: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  trackImage: {
    maxWidth: '500px',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default NextRaceInfo;