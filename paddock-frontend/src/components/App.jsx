import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from "./Dashboard";
import NavBar from './NavBar';
import RaceCalendar from './RaceCalendar';
import GarageView from './GarageView';
import NewsPage from './NewsPage';
import DriverDetail from './DriverDetail';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<RaceCalendar />} />
        <Route path="/garage" element={<GarageView />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/drivers/:id" element={<DriverDetail />} />
      </Routes>
    </Router>
  );
};

export default App;