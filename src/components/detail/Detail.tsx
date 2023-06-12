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
  const { channel } = location.state as DocumentData;
  console.log("DetailChannel", channel);

  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      const firebaseCountDoc = doc(db, "reviews", "pUDYbetB1MKUsbQmrysY");
      const countSnapshot = await getDoc(firebaseCountDoc);
      if (countSnapshot.exists()) {
        const countData = countSnapshot.data();
        const initialCount = countData.count;
        setCount(initialCount + 1);
      }
    };
    fetchCount();
  }, []);

  useEffect(() => {
    if (count !== null) {
      const updateFirebaseCount = async () => {
        const firebaseCountDoc = doc(db, "reviews", "pUDYbetB1MKUsbQmrysY");
        await updateDoc(firebaseCountDoc, { count });
      };
      updateFirebaseCount();
    }
  }, [count]);

  return (
    <div className={classes.detail}>
      <div className={classes.TitleContainer}>
        <p className={classes.Title}>{channel.titleName}</p>
      </div>
      <div className={classes.createdAtContainer}>
        {/* <p className={classes.createdAt}>{channel.createdAt}</p> */}
      </div>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          alt="イメージ"
          src={channel.photoURL}
        ></img>
      </div>
      <div className={classes.mainTextContainer}>
        <p>{channel.mainText}</p>
      </div>
      <div>{/* <button onClick={firebaseTest}>test</button> */}</div>
    </div>
  );
};

export default Detail;
