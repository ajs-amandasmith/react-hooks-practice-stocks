import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, handleClick }) {
  const displayMyStocks = myStocks.map(stock => (
    <Stock 
      key={stock.id} 
      stock={stock} 
      name={stock.name} 
      price={stock.price} 
      ticker={stock.ticker} 
      handleClick={handleClick} />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayMyStocks}
    </div>
  );
}

export default PortfolioContainer;
