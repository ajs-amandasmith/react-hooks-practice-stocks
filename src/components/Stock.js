import React from "react";

function Stock({ stock, name, price, ticker, handleClick }) {

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => handleClick(stock)}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
