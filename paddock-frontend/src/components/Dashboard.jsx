import React from 'react';
import HeroRaceCard from './HeroRaceCard';
import DriverStandingsCard from './DriverStandingsCard';
import ConstructorStandingsCard from './ConstructorStandingsCard';
import UpcomingRacesCard from './UpcomingRacesCard';
import NewsSidebar from './NewsSidebar';

const Dashboard = () => {
  return (
    <div style={styles.page}>
      {/* Shared container for max-width alignment */}
      <div style={styles.contentWrapper}>
        <div style={styles.heroWrapper}>
          <HeroRaceCard />
        </div>

        <div style={styles.contentRow}>
          <div style={styles.leftColumn}>
            <DriverStandingsCard />
            <ConstructorStandingsCard />
          </div>

          <div style={styles.centerColumn}>
            <UpcomingRacesCard />
          </div>

          <div style={styles.rightColumn}>
            <NewsSidebar />
          </div>
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
  contentRow: {
    display: 'flex',
    gap: '5rem',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // aligns top of cards
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // or center if you want vertical centering
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  centerColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '1.5rem',
  },
};

export default Dashboard;