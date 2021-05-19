import CoinItem from "./CoinItem";
import { useEffect, useState } from "react";
const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCoins(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {coins.map((coin) => {
        return (
          <CoinItem
            key={coin.id}
            img={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            percent={coin.price_change_percentage_24h}
          ></CoinItem>
        );
      })}
    </div>
  );
};

export default CoinList;
