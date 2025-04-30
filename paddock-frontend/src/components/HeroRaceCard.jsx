import React, { useEffect, useState } from 'react';
import TopThreeLive from './TopThreeLive';
import NextRaceInfo from './NextRaceInfo';

const HeroRaceCard = () => {
  const [isLive, setIsLive] = useState(false); // You’ll replace this with actual logic later

  useEffect(() => {
    // Placeholder for FastF1 or race status logic
    // For now, toggle manually or simulate
    const checkLiveStatus = async () => {
      // Example: check race status from your backend
      // const res = await fetch('/api/race-status');
      // const data = await res.json();
      // setIsLive(data.isLive);
      
      // Simulate live race for now
      setTimeout(() => setIsLive(true), 5000);
    };

    checkLiveStatus();
  }, []);

  return (
    <div className="hero-race-card" style={styles.container}>
      {isLive ? <TopThreeLive /> : <NextRaceInfo />}
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '2rem',
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: '12px',
    marginBottom: '2rem',
  },
};

export default HeroRaceCard;