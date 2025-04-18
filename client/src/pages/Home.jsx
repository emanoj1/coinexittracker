import React, { useState, useEffect } from 'react';
import ExitTable from '../components/ExitTable';
import { getLivePrice } from '../api';
import '../App.css'; // Make sure you’ve imported your CSS

const Home = () => {
  const [coinId, setCoinId] = useState('bitcoin');
  const [coinList, setCoinList] = useState([]);
  const [avgPrice, setAvgPrice] = useState('');
  const [coinQty, setCoinQty] = useState('');
  const [livePrice, setLivePrice] = useState(null);
  const [currency, setCurrency] = useState('usd');

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
      setCoinList(data);
    };
    fetchCoins();
  }, []);

  const fetchPrice = async () => {
    const price = await getLivePrice(coinId, currency);
    setLivePrice(price);
  };

  const reset = () => {
    setAvgPrice('');
    setCoinQty('');
    setLivePrice(null);
  };

  return (
    <div className="container">
      <h2>Crypto Exit Tracker</h2>

      <form>
        <div className="form-group">
          <label>Select Coin:</label>
          <select value={coinId} onChange={(e) => setCoinId(e.target.value)}>
            {coinList.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </option>
            ))}
          </select>
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
          <label>Number of Coins Held:</label>
          <input
            type="number"
            step="any"
            value={coinQty}
            onChange={(e) => setCoinQty(e.target.value)}
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

        <div className="form-group">
          <p className="note">
            <strong>Note:</strong> This tool does not convert currency values.
            Please ensure the average price you enter is in the selected currency.
            For example, if your average price was AUD 10 and you want to see results in USD,
            convert AUD 10 to USD first.
          </p>
        </div>

        <div>
          <button type="button" onClick={fetchPrice}>Get Live Price</button>
          <button type="button" onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
      </form>

      {livePrice && (
        <>
          <p style={{ marginTop: '2rem' }}>
            🔄 Live Price ({coinId.toUpperCase()} in {currency.toUpperCase()}): {currencySymbols[currency]}{livePrice}
          </p>
          <ExitTable
            avgPrice={parseFloat(avgPrice)}
            coinQty={parseFloat(coinQty)}
            currencySymbol={currencySymbols[currency]}
          />
        </>
      )}
    </div>
  );
};

export default Home;


