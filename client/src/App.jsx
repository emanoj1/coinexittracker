import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const App = () => (
  <Router>
    <div style={{ padding: '10px' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        marginBottom: '20px',
        backgroundColor: '#fff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/CoinExitTracker-logo1.png" alt="Coin Exit Tracker" style={{ height: '40px', marginRight: '10px' }} />
          
        </div>
        <nav style={{ fontWeight: '600' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* CoinGecko Attribution */}
      <footer>
        <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
          <img src="/coingecko-logo.avif" alt="Powered by CoinGecko" />
        </a>
        <p>Coin Exit Tracker | 2025</p>
      </footer>


      {/* Buy Me a Coffee Button */}
      <div style={{ position: 'fixed', bottom: 10, right: 10 }}>
        <a href="https://buymeacoffee.com/emanoj" target="_blank" rel="noreferrer">
          ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  </Router>
);

export default App;

