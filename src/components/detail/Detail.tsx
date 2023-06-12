/* eslint-disable @typescript-eslint/no-unused-vars */
import classes from "./Detail.module.scss";
import { DocumentData, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";

type props = {
  id: string;
  channel: DocumentData;
};

const Detail = () => {
  const location = useLocation();
  const { state: channel } = location;

  console.log("DetailChannel", channel);
  const [count, setCount] = useState(null);

  const documentID = channel.id;

  useEffect(() => {
    const fetchCount = async () => {
      const firebaseCountDoc = doc(db, "reviews", documentID);
      const countSnapshot = await getDoc(firebaseCountDoc);
      if (countSnapshot.exists()) {
        const countData = countSnapshot.data();
        const initialCount = countData.count;
        setCount(initialCount + 1);
      }
    };
    fetchCount();
  }, [documentID]);

  useEffect(() => {
    if (count !== null) {
      const updateFirebaseCount = async () => {
        const firebaseCountDoc = doc(db, "reviews", documentID);
        await updateDoc(firebaseCountDoc, { count });
      };
      updateFirebaseCount();
    }
  }, [count, documentID]);

  return (
    <div className={classes.detail}>
      <div className={classes.TitleContainer}>
        <p className={classes.Title}>{channel.channel.titleName}</p>
      </div>
      <div className={classes.createdAtContainer}>
        {/* <p className={classes.createdAt}>{channel.createdAt}</p> */}
      </div>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          alt="イメージ"
          src={channel.channel.photoURL}
        ></img>
      </div>
      <div className={classes.mainTextContainer}>
        <p>{channel.channel.mainText}</p>
      </div>
      <div>{/* <button onClick={firebaseTest}>test</button> */}</div>
    </div>
  );
};

export default Detail;
