import React from 'react';

const drivers = [
  { rank: 1, name: "Verstappen", team: "Red Bull", points: 110, races: 6, wins: 4, color: "#3671C6" },
  { rank: 2, name: "Leclerc", team: "Ferrari", points: 89, races: 6, wins: 1, color: "#E8002D" },
  { rank: 3, name: "Norris", team: "McLaren", points: 81, races: 6, wins: 0, color: "#FF8000" },
  // ... add more
];

const DriverStandingsCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>Driver Standings</h3>
        <span>2025 Season</span>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Driver</th>
            <th>Races</th>
            <th>Wins</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.rank} style={{ borderLeft: `4px solid ${driver.color}` }}>
              <td>{driver.rank}</td>
              <td>{driver.name}</td>
              <td>{driver.races}</td>
              <td>{driver.wins}</td>
              <td style={styles.bold}>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "1.5rem",
    color: "#fff",
    width: "100%",
    maxWidth: "420px",
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    color: '#bbb',
    paddingRight: '0.5rem',
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.95rem",
  },
  bold: {
    fontWeight: "600",
    color: "#fff",
  },
};

export default DriverStandingsCard;