import React, { useState, useEffect } from 'react';

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/schedule')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSchedule(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Loading schedule...</p>;
  }

  if (error) {
    return <p>Error fetching schedule: {error.message}</p>;
  }

  return (
    <div>
      <h2>2025 Race Schedule</h2>
      <ul>
        {schedule.map(race => (
          <li key={race.round}>
            Round {race.round}: {race.raceName} ({race.location}) - {race.date} {race.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;