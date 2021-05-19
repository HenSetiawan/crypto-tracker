const CoinItem = (props) => {
  return <div>
      <div>
          <img src={props.img} alt={props.name} />
          <h1>{props.name}</h1>
          <p>{props.symbol}</p>
      </div>
      <div>
          <p>{props.price}</p>
          <p>{props.volume}</p>
          <p>{props.percent}</p>
          <p>{props.marketcap}</p>
      </div>
  </div>;
};


export default CoinItem;