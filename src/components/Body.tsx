import classes from "./Body.module.scss";

const Body = () => {
  return (
    <div className={classes.body}>
      <nav>
        <ul className={classes.bodyNav}>
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
    </div>
  );
};

export default Body;
