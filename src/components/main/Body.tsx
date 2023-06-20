import classes from "./Body.module.scss";
import Ranking from "../ranking/Ranking";
import find from "../../images/find.png";
import useCollection from "../../hooks/useCollection";

const Body = () => {
  const { documents: reviews } = useCollection("reviews");
  let reviewMap = new Map();
  reviews.forEach((review) => reviewMap.set(review.channel.count, review));

  const sortedReviews = Array.from(reviewMap.values()).sort(
    (a, b) => b.channel.count - a.channel.count
  );

  console.log("sortedReviews", sortedReviews);
  return (
    <div className={classes.body}>
      <div className={classes.containerFind}>
        <img className={classes.find} src={find} alt="イメージ" />
      </div>
      <hr />
      <div className={classes.containerTopic}>
        <h3 className={classes.review}>注目のレビュー　ランキング</h3>
        <button className={classes.button}>一覧を見る {">"} </button>
      </div>
      <hr />
      <nav className={classes.containerNavBody}>
        {sortedReviews.slice(0, 3).map((channel) => (
          <Ranking channel={channel} id={channel.id} key={channel.id} />
          // {reviews.slice(0, 3).map((channel) => (
          //   <Ranking channel={channel} id={channel.id} key={channel.id} />
        ))}
      </nav>
    </div>
  );
};

export default Body;
