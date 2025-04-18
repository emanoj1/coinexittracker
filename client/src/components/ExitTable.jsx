import React from 'react';

const ExitTable = ({ avgPrice, coinQty, currencySymbol }) => {
  const totalSpent = avgPrice * coinQty;

  const rows = Array.from({ length: 25 }, (_, i) => {
    const multiplier = i + 1;
    const exitPrice = avgPrice * multiplier;
    const totalValue = exitPrice * coinQty;
    const profit = totalValue - totalSpent;

    return {
      multiplier,
      exitPrice: exitPrice.toFixed(4),
      totalValue: totalValue.toFixed(2),
      profit: profit.toFixed(2),
    };
  });

  return (
    <table border="1" cellPadding={10} style={{ marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Exit Multiplier</th>
          <th>Target Price per Coin</th>
          <th>Total Value</th>
          <th>Net Profit</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.multiplier}>
            <td data-label="Multiplier">{r.multiplier}x</td>
            <td data-label="Price per Coin">{currencySymbol}{r.exitPrice}</td>
            <td data-label="Total Value">{currencySymbol}{r.totalValue}</td>
            <td data-label="Net Profit">{currencySymbol}{r.profit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExitTable;

