import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const App = () => (
  <Router>
    <div style={{ padding: '10px' }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Buy Me a Coffee */}
      <div style={{ position: 'fixed', bottom: 10, right: 10 }}>
        <a href="https://www.buymeacoffee.com/yourname" target="_blank" rel="noreferrer">
          ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  </Router>
);

export default App;
