import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import './App.css';

const App = () => {
  return (
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
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/tick-logo-cet.png"
                alt="Coin Exit Tracker"
                style={{ height: '50px', marginRight: '10px' }}
              />
            </Link>
          </div>

          <nav style={{ fontWeight: '600' }}>
            <Link to="/calculator" style={{ marginRight: '15px' }}>Custom Sell Calculator</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

        {/* CoinGecko Attribution */}
        <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '3rem' }}>
          <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
            <img src="/pricedata-coingecko.png" alt="Powered by CoinGecko" style={{ height: '60px', opacity: 1 }} />
          </a>
          <p style={{ fontWeight: '600', marginTop: '0.5rem' }}>Coin Exit Tracker | 2025</p>
          
        </footer>
      </div>
    </Router>
  );
};

export default App;




