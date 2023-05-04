import classes from "./Body.module.scss";
import find from "../../images/find.png";

const Body = () => {
  return (
    <div className={classes.body}>
      <div className={classes.containerFind}>
        <img className={classes.find} src={find} />
      </div>
      <hr />
      <div className={classes.containerTopic}>
        <h3 className={classes.review}>注目のレビュー　ランキング</h3>
        <button className={classes.button}>一覧を見る {">"} </button>
      </div>
      <hr />
      <nav className={classes.containerNavBody}>
        <ul className={classes.ulBody}>
          <li>1位</li>
          <img src="https://via.placeholder.com/260" />
          <br></br>
          <h3 className={classes.Title}>Title</h3>
          <h3 className={classes.name}>name</h3>
        </ul>
        <ul className={classes.ulBody}>
          <li>2位</li>
          <img src="https://via.placeholder.com/260" />
          <br></br>
          <h3 className={classes.Title}>Title</h3>
          <h3 className={classes.name}>name</h3>
        </ul>
        <ul className={classes.ulBody}>
          <li>3位</li>
          <img src="https://via.placeholder.com/260" />
          <br></br>
          <h3 className={classes.Title}>Title</h3>
          <h3 className={classes.name}>name</h3>
        </ul>
      </nav>
    </div>
  );
};

export default Body;
