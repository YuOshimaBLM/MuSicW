import classes from "./Body.module.scss";
import Ranking from "../ranking/Ranking";
import find from "../../images/find.png";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
} from "firebase/firestore";

interface Channel {
  id: string;
  channel: DocumentData;
}

const Body = () => {
  const [reviews, setReviews] = useState<Channel[]>([]);

  const q = query(collection(db, "Reviews"));

  useEffect(() => {
    onSnapshot(q, (querySnapShot) => {
      const channelsResults: Channel[] = [];
      querySnapShot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setReviews(channelsResults);
    });
  }, []);

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
        {reviews.slice(0, 3).map((channel) => (
          <Ranking channel={channel} id={channel.id} key={channel.id} />
        ))}
        {/* <Ranking />
        <Ranking /> */}
      </nav>
    </div>
  );
};

export default Body;
