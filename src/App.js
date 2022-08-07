import React from 'react';
//import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Dev from './pages/Dev';
import Signup from './pages/Signup';
import Login from './pages/Login';

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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Router>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dev" element={<Dev />} />
            <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
