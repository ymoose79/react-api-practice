import React from "react";
import "./CSS/Header.css"

const Header = () => {
  return (
    <header className="App-header">
      <div className="container">
        <div className="row mt-2">
          <h1>crypto</h1>
        </div>
        <div className="row mb-2">
          <h1 className="coin-text">Search a currency</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
