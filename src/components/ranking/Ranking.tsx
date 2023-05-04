import classes from "./Ranking.module.scss";

const Ranking = () => {
  return (
    <ul className={classes.ulBody}>
      <li>1位</li>
      <img src="https://via.placeholder.com/260" />
      <br></br>
      <h3 className={classes.Title}>Title</h3>
      <h3 className={classes.name}>name</h3>
    </ul>
  );
};

export default Ranking;
