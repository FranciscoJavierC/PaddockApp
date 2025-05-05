import React from 'react';
import HeroRaceCard from './HeroRaceCard';
import DriverStandingsCard from './DriverStandingsCard';
import ConstructorStandingsCard from './ConstructorStandingsCard';
import UpcomingRacesCard from './UpcomingRacesCard';

const Dashboard = () => {
  return (
    <div style={styles.page}>
      {/* Hero Race Card (centered at the top) */}
      <div style={styles.heroWrapper}>
        <HeroRaceCard />
      </div>

      {/* Content Row: Left column with both standings stacked */}
      <div style={styles.row}>
        <div style={styles.leftColumn}>
          <DriverStandingsCard />
          <ConstructorStandingsCard />
        </div>

        <div style={styles.centerColumn}>
          <UpcomingRacesCard />
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '2rem',
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
  },
  heroWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  row: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  centerColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
};

export default Dashboard;