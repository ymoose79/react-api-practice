import "./components/CSS/App.css";
import Header from "./components/Header";
import CryptoTable from "./components/CryptoTable";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FloatingLabel, Form } from "react-bootstrap"


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((error) => alert(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
     <Header/>
     <div className="container col-6 mt-5">
      <form>
      <FloatingLabel controlId="floatingInput" label="CryptoSearch" className="m-3">
      <Form.Control type="text" placeholder="a" onChange={handleChange} />
       </FloatingLabel>
      </form>
    </div>
       {filteredCoins.map((coin) => {
        return (
          <CryptoTable
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            volume={coin.total_volume}
            symbol={coin.symbol}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
