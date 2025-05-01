import React from 'react';

const NextRaceInfo = () => {
  const raceName = 'Miami Grand Prix';
  const raceDate = '4 May 2025';
  const raceTime = '16:00 PST';
  const trackImage = '/assets/circuits/miami-circuit.png';
  const trackFlag = '/assets/flags/USA.png';

  return (
    <div style={styles.container}>
      {/* LEFT PANEL */}
      <div style={styles.left}>
        <h3 style={styles.upNext}>ROUND 6 – UP NEXT</h3>
        <div style={styles.dateBlock}>
          <h1 style={styles.dateRange}>02–04</h1>
          <span style={styles.month}>MAY</span>
        </div>
        <div style={styles.flagRow}>
          <img src={trackFlag} alt="Flag" style={styles.flag} />
          <span style={styles.circuit}>Miami International Autodrome</span>
        </div>
        <h2 style={styles.raceName}>{raceName}</h2>
        <p style={styles.sponsor}>Formula 1 Crypto.com Miami Grand Prix 2025</p>
      </div>
  
      {/* RIGHT PANEL */}
      <div style={styles.right}>
        <div style={styles.scheduleBox}>
          {[
            { name: 'Practice 1', day: 'FRI', time: '12:30 - 13:30' },
            { name: 'Sprint Qualifying', day: 'FRI', time: '16:30 - 17:14' },
            { name: 'Sprint', day: 'SAT', time: '12:00 - 13:00' },
            { name: 'Qualifying', day: 'SAT', time: '16:00 - 17:00' },
            { name: 'Race', day: 'SUN', time: '16:00' },
          ].map((session) => (
            <div style={styles.sessionRow} key={session.name}>
              <span>{session.name}</span>
              <span>{session.day}</span>
              <span style={styles.timePill}>{session.time}</span>
            </div>
          ))}
          <p style={styles.note}>Times displayed are local track times</p>
        </div>
        <img src={trackImage} alt="Circuit layout" style={styles.largeTrackImage} />
      </div>
    </div>
  );
};

const styles = {
  upNext: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
  },
  dateBlock: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  dateRange: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  month: {
    fontSize: '1.1rem',
    backgroundColor: '#333',
    padding: '2px 6px',
    borderRadius: '4px',
    color: '#fff',
  },
  sponsor: {
    fontSize: '0.9rem',
    color: '#999',
    marginTop: '0.5rem',
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.5rem',
  },
  scheduleBox: {
    backgroundColor: '#1c1c1c',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    width: '100%',
    maxWidth: '400px',
  },
  timePill: {
    backgroundColor: '#333',
    padding: '4px 10px',
    borderRadius: '9999px',
    fontSize: '0.95rem',
  },
  note: {
    marginTop: '0.5rem',
    fontSize: '0.8rem',
    color: '#888',
    fontStyle: 'italic',
  },
  flag: {
    width: '32px',
    height: 'auto',
    marginRight: '0.5rem',
    borderRadius: '4px',
  },
  largeTrackImage: {
    width: '200px', // or try 180px if you want it tighter
    height: 'auto',
    alignSelf: 'center',
    marginTop: '1rem',
  },
};

export default NextRaceInfo;