import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;


/*
App
  |__Header
  |__MainContainer
          |__SearchBar
          |__StockContainer
                |__Stock
          |__PortfolioContainer
                |__Stock

Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.

Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.

Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

Allow a user to filter stocks based on the type of the stock.
*/