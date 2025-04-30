import React from 'react';

const TopThreeLive = () => {
  // Simulated live data — replace with real FastF1 API later
  const topThree = [
    { position: 1, name: 'Verstappen', team: 'Red Bull', gap: '+0.0', color: '#3671C6' },
    { position: 2, name: 'Leclerc', team: 'Ferrari', gap: '+3.2s', color: '#E8002B' },
    { position: 3, name: 'Hamilton', team: 'Mercedes', gap: '+5.1s', color: '#6CD3BF' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🏁 Live: Top 3 Drivers</h2>
      <div style={styles.driverList}>
        {topThree.map((driver) => (
          <div key={driver.position} style={{ ...styles.driverCard, borderLeft: `5px solid ${driver.color}` }}>
            <div style={styles.position}>#{driver.position}</div>
            <div>
              <div style={styles.name}>{driver.name}</div>
              <div style={styles.team}>{driver.team}</div>
            </div>
            <div style={styles.gap}>{driver.gap}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
  },
  header: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    color: '#00ff88',
  },
  driverList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  driverCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#1c1c1c',
    borderRadius: '8px',
    color: '#fff',
  },
  position: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    width: '3rem',
  },
  name: {
    fontSize: '1.1rem',
  },
  team: {
    fontSize: '0.9rem',
    color: '#aaa',
  },
  gap: {
    fontSize: '1rem',
    color: '#ccc',
  },
};

export default TopThreeLive;