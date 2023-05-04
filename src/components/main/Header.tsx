import classes from "./Header.module.scss";
import login from "../../images/login.png";
import { useAppSelector } from "../../app/hooks";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  return (
    <header className={classes.header}>
      <div className={classes.containerLogo}>
        <h3 className={classes.Logo}>MuSicW</h3>
        {user ? (
          <div className={classes.LogoName}>{user.email}　さん</div>
        ) : (
          <div className={classes.LogoName}>ようこそ、ゲストさん</div>
        )}
      </div>
      <nav className={classes.containerNavFirst}>
        <ul className={classes.ulFirst}>
          <li>
            <a href="/">Top</a>
          </li>
          <li>
            <a href="/review">Review</a>
          </li>
          <li>
            <a href="#">Mypage</a>
          </li>
          <li>
            <a href="#">Message</a>
          </li>
          {user ? (
            <li>
              <img className={classes.loginImg} src={user.photo} />
              <p className={classes.logout} onClick={() => auth.signOut()}>
                Logout
              </p>
            </li>
          ) : (
            <li>
              <img
                className={classes.loginImg}
                src={login}
                onClick={() => navigate("/login")}
              />
            </li>
          )}
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
