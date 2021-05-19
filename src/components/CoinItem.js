import classes from "../assets/coinItem.module.css";
const CoinItem = (props) => {
  return (
    <div className={classes.row}>
      <div className={classes.col}>
        <img src={props.img} className={classes.image} alt={props.name} />
        <h1 className={classes.coin_name}>{props.name}</h1>
        <p className={classes.coin_symbol}>{props.symbol}</p>
      </div>
      <div className={classes.col}>
        <p>$ {props.price}</p>
        <p>$ {props.volume.toLocaleString()}</p>
        {props.percent < 0 ? (
          <p className={classes.red}>{props.percent.toFixed(2)} %</p>
        ) : (
          <p className={classes.green}>{props.percent.toFixed(2)} %</p>
        )}
        <p>$ {props.marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CoinItem;
