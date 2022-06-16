import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData, handleClick }) {
  const displayStocks = stockData.map(stock => (
    <Stock key={stock.id} stock={stock} name={stock.name} price={stock.price} ticker={stock.ticker} handleClick={handleClick} />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
