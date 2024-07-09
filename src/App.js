import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setIsLoading(false);
  }, []);

  const CoinList = () => {
    return (
      <>
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      </>
    );
  };

  return (
    <>
      <h1>The Coins</h1>
      {isLoading ? <strong>Loading...</strong> : <CoinList />}
    </>
  );
};

export default App;
