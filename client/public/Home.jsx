import React, { useState } from 'react';
import ExitTable from '../components/ExitTable';
import { getLivePrice } from '../api';

const Home = () => {
  const [coinId, setCoinId] = useState('aergo');
  const [avgPrice, setAvgPrice] = useState('');
  const [totalSpent, setTotalSpent] = useState('');
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

  const fetchPrice = async () => {
    const price = await getLivePrice(coinId, currency);
    setLivePrice(price);
  };

  const reset = () => {
    setAvgPrice('');
    setTotalSpent('');
    setLivePrice(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Crypto Exit Tracker</h2>

      <label>
        Select Coin:
        <select value={coinId} onChange={(e) => setCoinId(e.target.value)}>
          <option value="aergo">AERGO</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
        </select>
      </label>

      <br /><br />
      <label>Average Price Paid per Coin: <input type="number" step="any" value={avgPrice} onChange={(e) => setAvgPrice(e.target.value)} /></label>
      <br />
      <label>Total Amount Spent: <input type="number" step="any" value={totalSpent} onChange={(e) => setTotalSpent(e.target.value)} /></label>
      <br />
    <label>
        Currency:&nbsp;
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
    </label>
      <br /><br />
      <button onClick={fetchPrice}>Get Live Price</button>
      <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>

      {livePrice && (
        <>
          <p>🔄 Live Price ({coinId.toUpperCase()} in {currency.toUpperCase()}): {currencySymbols[currency]}{livePrice}</p>
          <ExitTable
            avgPrice={parseFloat(avgPrice)}
            totalSpent={parseFloat(totalSpent)}
            livePrice={livePrice}
            currencySymbol={currencySymbols[currency]}
          />
        </>
      )}
    </div>
  );
};

export default Home;
