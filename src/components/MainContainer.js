import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filteredType, setFilteredType] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(stocks => setStockData(stocks))
  }, [])

  useEffect(() => {
    if (sortBy === 'Alphabetically') {
      const sortedStocks = sortByName();
      setStockData(sortedStocks)
    } else {
      const sortedStocks = sortByPrice();
      setStockData(sortedStocks)
    }
  }, [sortBy])

  const filterType = (e) => {
    setFilteredType(e.target.value)
  }

  function sortStocks(e) {
    setSortBy(e.target.value)
  }

  const sortByName = () => {
    return [...stockData].sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    })
  }

  const sortByPrice = () => {
    return [...stockData].sort(function(a, b) {
      return a.price - b.price;
    })
  }

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
      <SearchBar sortStocks={sortStocks} sortBy={sortBy} filterType={filterType} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stockData} handleClick={buyStock} filteredType={filteredType} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handleClick={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
