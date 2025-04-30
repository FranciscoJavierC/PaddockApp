import React from 'react';

const NextRaceInfo = () => {
  const raceName = 'Miami Grand Prix';
  const raceDate = '4 May 2025';
  const raceTime = '16:00 PST';
  const trackImage = '/assets/circuits/miami-circuit.png'; // Make sure to put the image in `public/assets/`

  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.title}>Next Race</h2>
        <h3 style={styles.raceName}>{raceName}</h3>
        <p style={styles.dateTime}>{raceDate} • {raceTime}</p>
        <p style={styles.countdown}>⏳ 10 days 2 hours remaining</p> {/* Replace with real countdown later */}
      </div>

      <img src={trackImage} alt="Circuit layout" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '1.4rem',
    marginBottom: '0.5rem',
  },
  raceName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  dateTime: {
    fontSize: '1.1rem',
    color: '#bbb',
    marginBottom: '0.5rem',
  },
  countdown: {
    fontSize: '1rem',
    color: '#ff4d4d',
  },
  image: {
    maxWidth: '200px',
    height: 'auto',
  },
};

export default NextRaceInfo;