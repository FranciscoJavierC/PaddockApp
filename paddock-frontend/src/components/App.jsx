import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from "./Dashboard";
import NavBar from './NavBar';
import RaceCalendar from './RaceCalendar';
import GarageView from './GarageView';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<RaceCalendar />} />
        <Route path="/garage" element={<GarageView />} />
      </Routes>
    </Router>
  );
};

export default App;