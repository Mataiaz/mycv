import React from 'react';
//import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Redirect from './components/Redirect';

function App() {
  return (
    <div>
      <Router>
        <Navbar>
          <Router>
            <Route path="/" element={<Home />} />
            <Route
              path="/github"
              element={<Redirect />}
              loc="https://github.com/"
            />
          </Router>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
              path="/github"
              element={<Redirect />}
              loc="https://github.com/"
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
