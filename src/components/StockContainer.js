import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData }) {
  const displayStocks = stockData.map(stock => (
    <Stock key={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker} />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
