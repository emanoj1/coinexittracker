// Custom Sell Calculator

import React, { useState, useEffect } from 'react';
import { getLivePrice } from '../api';
import '../App.css';

const Calculator = () => {
  const [coinList, setCoinList] = useState([]);
  const [coinId, setCoinId] = useState('bitcoin');
  const [quantity, setQuantity] = useState('');
  const [avgPrice, setAvgPrice] = useState('');
  const [livePrice, setLivePrice] = useState(null);
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState('usd');

  const currencySymbols = {
    usd: '$', aud: 'A$', eur: '€', gbp: '£', inr: '₹',
    jpy: '¥', cad: 'C$', sgd: 'S$', brl: 'R$', zar: 'R'
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/list');
      const data = await res.json();
      const formatted = data.map((coin) => ({
        value: coin.id,
        label: `${coin.name} (${coin.symbol.toUpperCase()})`
      }));
      setCoinList(formatted);
    };
    fetchCoins();
  }, []);

  const handleCalculate = async () => {
    if (!quantity || !avgPrice || isNaN(quantity) || isNaN(avgPrice)) return;
    const price = await getLivePrice(coinId, currency);
    setLivePrice(price);
    const totalSale = price * parseFloat(quantity);
    const cost = parseFloat(avgPrice) * parseFloat(quantity);
    const multiplier = price / parseFloat(avgPrice);
    const profit = totalSale - cost;

    setResult({
      totalSale, multiplier, profit
    });
  };

  return (
    <div className="container">
      <h2>Custom Sell Calculator</h2>

      <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
        This tool helps you calculate how much you would gain or lose if you sold your crypto right now at the current market price.  
        Enter the details below, and the calculator will show your total sale amount, multiplier achieved, and whether you're in profit or loss.
        </p>

      <div className="form-group">
        <label>Select Coin:</label>
        <select value={coinId} onChange={(e) => setCoinId(e.target.value)}>
          {coinList.map((coin) => (
            <option key={coin.value} value={coin.value}>{coin.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Number of Coins to Sell:</label>
        <input
          type="number"
          step="any"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Average Price Paid per Coin:</label>
        <input
          type="number"
          step="any"
          value={avgPrice}
          onChange={(e) => setAvgPrice(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {Object.keys(currencySymbols).map((code) => (
            <option key={code} value={code}>{code.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleCalculate}>Calculate</button>
        <button
        onClick={() => {
            setCoinId('bitcoin');
            setQuantity('');
            setAvgPrice('');
            setCurrency('usd');
            setLivePrice(null);
            setResult(null);
        }}
        style={{ marginLeft: '10px' }}
        >
            Reset
            </button>
     </div>


      {result && (
        <div className="result-box" style={{
          marginTop: '2rem',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '1.5rem',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{ marginBottom: '0.75rem' }}>
            Live Price: {currencySymbols[currency]}{livePrice.toFixed(4)}
          </h3>
          <p>Total Sale Amount: <strong>{currencySymbols[currency]}{result.totalSale.toFixed(2)}</strong></p>
          <p>Multiplier Achieved: <strong>{result.multiplier.toFixed(2)}x</strong></p>
          <p>
            {result.profit >= 0
              ? <span style={{ color: 'green' }}>✅ Profit: {currencySymbols[currency]}{result.profit.toFixed(2)}</span>
              : <span style={{ color: 'red' }}>❌ Loss: {currencySymbols[currency]}{Math.abs(result.profit).toFixed(2)}</span>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
