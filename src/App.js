import React from 'react';
//import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Navbar>
          <Router>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Router>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
