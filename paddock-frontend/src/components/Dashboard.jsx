import React from 'react';
import HeroRaceCard from './HeroRaceCard';

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <HeroRaceCard />
      {/* You can add StandingsSidebar, UpcomingRaces, NewsSidebar here next */}
    </div>
  );
};

export default Dashboard;