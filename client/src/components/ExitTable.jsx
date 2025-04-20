import React from 'react';

const ExitTable = ({ avgPrice, coinQty, currencySymbol, livePrice }) => {
  const multipliers = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="exit-table">
      <table>
        <thead>
          <tr>
            <th>Multiplier</th>
            <th>Target Price</th>
            <th>Total Value</th>
            <th>Profit</th>
            <th>Profit %</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {multipliers.map((multiplier) => {
            const targetPrice = avgPrice * multiplier;
            const totalValue = targetPrice * coinQty;
            const totalCost = avgPrice * coinQty;
            const profit = totalValue - totalCost;
            const profitPercent = (profit / totalCost) * 100;
            const progress = livePrice ? Math.min((livePrice / targetPrice) * 100, 100) : 0;

            let progressColor = '#999';
            if (progress >= 100) progressColor = '#4caf50'; // green
            else if (progress >= 50) progressColor = '#ff9800'; // orange
            else progressColor = '#f44336'; // red

            return (
              <tr key={multiplier}>
                <td>{multiplier}x</td>
                <td>{currencySymbol}{targetPrice.toFixed(2)}</td>
                <td>{currencySymbol}{totalValue.toFixed(2)}</td>
                <td>{currencySymbol}{profit.toFixed(2)}</td>
                <td>{Math.floor(profitPercent)}%</td>
                <td style={{ minWidth: '120px' }}>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%`, backgroundColor: progressColor }}
                    />
                  </div>
                  <small>{progress.toFixed(1)}%</small>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExitTable;
