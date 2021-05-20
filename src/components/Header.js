import classes from "../assets/header.module.css";
const Header = () => {
  return <div>
      <div className={classes.row}>
          <div className={classes.col}>
              <p>Koin</p>
          </div>
          <div className={classes.col}>
              <p>Harga</p>
              <p>volume 24 jam</p>
              <p>24 jam</p>
              <p>kapitalisasi pasar</p>
          </div>
      </div>
  </div>;
};
export default Header;
