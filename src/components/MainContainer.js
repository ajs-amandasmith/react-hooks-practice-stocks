import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(stocks => setStockData(stocks))
  }, [])

  const buyStock = (stock) => {
    if (!myStocks.includes(stock)) {
      const updatedMyStocks = [...myStocks, stock];
      setMyStocks(updatedMyStocks)
    } else {
      alert('You already have this stock!')
    }
  }

  const sellStock = (soldStock => {
    const updatedStocks = myStocks.filter(stock => {
      return stock !== soldStock;
    })
    setMyStocks(updatedStocks);
  })

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stockData} handleClick={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handleClick={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
