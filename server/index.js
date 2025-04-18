import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/price/:coinId', async (req, res) => {
  const { coinId } = req.params;
  const { currency = 'usd' } = req.query;
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}`);
    const data = await response.json();
    res.json(data[coinId]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch price' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
