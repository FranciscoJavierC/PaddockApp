import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from "./Dashboard";
import NavBar from './NavBar';
import RaceCalendar from './RaceCalendar';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<RaceCalendar />} />
      </Routes>
    </Router>
  );
};

export default App;