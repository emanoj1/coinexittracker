// React and core library imports
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

// Local files (API, components, styles, etc.)
import ExitTable from '../components/ExitTable';
import { getLivePrice } from '../api';
import '../App.css';


const getRelativeTime = (pastTime) => {
  const diff = Math.floor((Date.now() - pastTime.getTime()) / 1000); // in seconds

  if (diff < 60) return `${diff} second${diff !== 1 ? 's' : ''} ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minute${diff < 120 ? '' : 's'} ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour${diff < 7200 ? '' : 's'} ago`;
  return `${Math.floor(diff / 86400)} day${diff < 172800 ? '' : 's'} ago`;
};

const Home = () => {
  const [coinId, setCoinId] = useState('bitcoin');
  const [coinOptions, setCoinOptions] = useState([]);
  const [avgPrice, setAvgPrice] = useState('');
  const [coinQty, setCoinQty] = useState('');
  const [livePrice, setLivePrice] = useState(null);
  const [currency, setCurrency] = useState('usd');
  const [lastUpdated, setLastUpdated] = useState(null);

  const currencySymbols = {
    usd: '$',
    aud: 'A$',
    eur: '€',
    gbp: '£',
    inr: '₹',
    jpy: '¥',
    cad: 'C$',
    sgd: 'S$',
    brl: 'R$',
    zar: 'R',
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/list');
      const data = await res.json();
  
      // Format for react-select
      const options = data.map((coin) => ({
        value: coin.id,
        label: `${coin.name} (${coin.symbol.toUpperCase()})`
      }));
  
      setCoinOptions(options); // new state
    };
  
    fetchCoins();
  }, []);
  

  const fetchPrice = async () => {
    const price = await getLivePrice(coinId, currency);
    setLivePrice(price);
    setLastUpdated(new Date());
  };

  const reset = () => {
    setAvgPrice('');
    setCoinQty('');
    setLivePrice(null);
  };

  return (
    <div className="container">
      <h2>Welcome!</h2>

      <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
        <strong>Coin Exit Tracker</strong> helps you plan your cryptocurrency sell strategy with confidence.
        Enter the average price you paid and how many coins you hold to see your potential profits across 1x to 25x multipliers.
        Choose your currency, select your coin, and visualize your exit plan — all in one place. But as they say: DYOR!
      </p>

      <p>Let's begin! Input details below:</p>

      <form>
        <div className="form-group">
          <label>Select Coin:</label>
          <Select
          options={coinOptions}
          value={coinOptions.find((opt) => opt.value === coinId)}
          onChange={(selectedOption) => setCoinId(selectedOption.value)}
          placeholder="Search coin by name or symbol..."
          isSearchable
          />
        </div>

        <div className="form-group">
          <label>Average Price Paid per Coin:</label>
          <input
            type="number"
            step="any"
            min="0"
            value={avgPrice}
            onChange={(e) => setAvgPrice(e.target.value)}
            style={{
              MozAppearance: 'textfield',
              WebkitAppearance: 'none',
              margin: 0
            }}
            onWheel={(e) => e.target.blur()} // disables scroll up/down
          />

        </div>

        <div className="form-group">
          <p className="note">
            <strong>Note:</strong> This tool does not convert currency values.
            Please ensure the average price you enter is in the selected currency.
            For example, if your average price was AUD 10 and you want to see results in USD,
            convert AUD 10 to USD first.
          </p>
        </div>

        <div className="form-group">
          <label>Number of Coins Held:</label>
          <input
            type="number"
            step="any"
            min="0"
            value={coinQty}
            onChange={(e) => setCoinQty(e.target.value)}
            style={{
              MozAppearance: 'textfield',
              WebkitAppearance: 'none',
              margin: 0
            }}
            onWheel={(e) => e.target.blur()} // disables scroll increment/decrement
          />
        </div>

        <div className="form-group">
          <label>Currency:</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="inr">INR</option>
            <option value="jpy">JPY</option>
            <option value="cad">CAD</option>
            <option value="sgd">SGD</option>
            <option value="brl">BRL</option>
            <option value="zar">ZAR</option>
          </select>
        </div>

        <div>
          <button type="button" onClick={fetchPrice}>Get Live Price</button>
          <button type="button" onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
      </form>

      {livePrice && (
        <>
        <p style={{ marginTop: '2rem' }}>
          🔄 Live Price data from CoinGecko ({coinId.toUpperCase()} in {currency.toUpperCase()}):  
          <span style={{
            fontWeight: 'bold',
            color: '#2e7d32',         // Deep green color
            fontSize: '1.15rem',
            marginLeft: '8px',
            display: 'inline-block'
            }}>
              {currencySymbols[currency]}{livePrice}
          </span>
        </p>

          {lastUpdated && (
          <div style={{
            fontSize: '0.9rem',
            color: '#555',
            backgroundColor: '#f9f9f9',
            padding: '0.75rem 1rem',
            marginTop: '0.75rem',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            }}>
              Last updated: <strong>{lastUpdated.toLocaleString()}</strong>  
              <span style={{ marginLeft: '10px', color: '#888' }}>({getRelativeTime(lastUpdated)})</span><br />
              <span style={{ fontStyle: 'italic' }}>
                Click the <strong>GET LIVE PRICE</strong> button above to refresh price.
                </span>
                </div>
              )}
              
              <ExitTable
              avgPrice={parseFloat(avgPrice)}
              coinQty={parseFloat(coinQty)}
              currencySymbol={currencySymbols[currency]}
              livePrice={parseFloat(livePrice)}
              />
              
<p style={{ marginTop: '1.5rem', fontSize: '0.95rem', textAlign: 'center' }}>
  📘 Check the <a
    href="/about"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}
  >About</a> page for formulas and explanations.
</p>


        </>
      )}
    </div>
  );
};

export default Home;


