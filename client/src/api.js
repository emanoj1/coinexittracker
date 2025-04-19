const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getLivePrice = async (coinId, currency = 'usd') => {
  const res = await fetch(`${BASE_URL}/price/${coinId}?currency=${currency}`);
  const data = await res.json();
  return data[currency];
};

