import React from 'react';
//import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Dev from './pages/Dev';

function App() {
  return (
    <div>
      <Router>
        <Navbar>
          <Router>
            <Route path="/" element={<Home />} />
            <Route path="/Dev" element={<Dev />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutMe" element={<AboutMe />} />
          </Router>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dev" element={<Dev />} />
            <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
