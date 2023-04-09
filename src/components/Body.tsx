import classes from "./Body.module.scss";
import find from "../images/find.png";

const Body = () => {
  return (
    <div className={classes.body}>
      <div>
        <img className={classes.find} src={find} />
      </div>
      <hr />
      <div className={classes.topic}>
        注目のレビューランキング
        <button className={classes.button}>一覧を見る {">"} </button>
      </div>
      <hr></hr>
      <nav className={classes.navBody}>
        <ul>
          <li>1位</li>
          <img src="https://via.placeholder.com/260" />
          <br></br>
          <div>title</div>
          <div>name</div>
        </ul>
        <ul>
          <li>2位</li>
          <img src="https://via.placeholder.com/260" />
          <br></br>
          <div>title</div>
          <div>name</div>
        </ul>
        <ul>
          <li>3位</li>
          <img src="https://via.placeholder.com/260" />
          <br></br>
          <div>title</div>
          <div>name</div>
        </ul>
      </nav>
    </div>
  );
};

export default Body;
