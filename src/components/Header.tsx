import classes from "./Header.module.scss";
import login from "../images/login.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h3>MuSicW</h3>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Top</a>
          </li>
          <li>
            <a href="#">Review</a>
          </li>
          <li>
            <a href="#">Mypage</a>
          </li>
          <li>
            <a href="#">Message</a>
          </li>
          <li>
            <img className={classes.headerImg} src={login} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
