import classes from "./Header.module.scss";
import login from "../images/login.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h3>MuSicW</h3>
      </div>
      <nav>
        <ul className={classes.navFirst}>
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
      <br></br>
      <nav>
        <ul className={classes.navSecond}>
          <li>
            <a href="#">Jpop</a>
          </li>
          <li>
            <a href="#">アニメ</a>
          </li>
          <li>
            <a href="#">邦ロック</a>
          </li>
          <li>
            <a href="#">Kpop</a>
          </li>
          <li>
            <a href="#">洋楽ポップス</a>
          </li>
          <li>
            <a href="#">洋楽ロック</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
