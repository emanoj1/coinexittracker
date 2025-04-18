const BASE_URL = 'http://localhost:5000/api';

export const getLivePrice = async (coinId, currency = 'usd') => {
  const res = await fetch(`${BASE_URL}/price/${coinId}?currency=${currency}`);
  const data = await res.json();
  return data[currency];
};
