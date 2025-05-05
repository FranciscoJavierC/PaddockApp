import React from 'react';

const constructors = [
  { rank: 1, team: "Red Bull", points: 192, wins: 4, races: 6, color: "#3671C6" },
  { rank: 2, team: "Ferrari", points: 167, wins: 1, races: 6, color: "#E8002D" },
  { rank: 3, team: "McLaren", points: 142, wins: 0, races: 6, color: "#FF8000" },
  // Add more as needed
];

const ConstructorStandingsCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>Constructor Standings</h3>
        <span>2025 Season</span>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Races</th>
            <th>Wins</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {constructors.map(team => (
            <tr key={team.rank} style={{ borderLeft: `4px solid ${team.color}` }}>
              <td>{team.rank}</td>
              <td>{team.team}</td>
              <td>{team.races}</td>
              <td>{team.wins}</td>
              <td style={styles.bold}>{team.points}</td>
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
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    color: "#bbb",
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

export default ConstructorStandingsCard;