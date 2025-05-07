import React from 'react';

const upcomingRaces = [
  { name: "Miami Grand Prix", date: "4 May 2025", country: "🇺🇸" },
  { name: "Emilia Romagna GP", date: "18 May 2025", country: "🇮🇹" },
  { name: "Monaco Grand Prix", date: "25 May 2025", country: "🇲🇨" },
  { name: "Spain Grand Prix", date: "1 June 2025", country: "🇪🇸"},
  { name: "Canada Grand Prix", date: "15 June 2025", country: "🇨🇦"},
  { name: "Austria Grand Prix", date: "29 June 2025", country: "🇦🇹"},
  // Add more if you like
];

const UpcomingRacesCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>Upcoming Races</h3>
        <span>F1 2025</span>
      </div>
      <ul style={styles.list}>
        {upcomingRaces.map((race, idx) => (
          <li key={idx} style={styles.raceItem}>
            <span style={styles.flag}>{race.country}</span>
            <div>
              <div style={styles.raceName}>{race.name}</div>
              <div style={styles.date}>{race.date}</div>
            </div>
          </li>
        ))}
      </ul>
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
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  raceItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  flag: {
    fontSize: "1.5rem",
  },
  raceName: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  date: {
    fontSize: "0.85rem",
    color: "#aaa",
  },
  
};

export default UpcomingRacesCard;