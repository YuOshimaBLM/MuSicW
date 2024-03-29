import classes from "./Header.module.scss";
import login from "../images/login.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.containerLogo}>
        <h3 className={classes.Logo}>MuSicW</h3>
      </div>
      <nav className={classes.containerNavFirst}>
        <ul className={classes.ulFirst}>
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
            <button>
              <img className={classes.loginImg} src={login} />
            </button>
          </li>
        </ul>
      </nav>
      <br></br>
      <nav className={classes.containerNavSecond}>
        <ul className={classes.ulSecond}>
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
