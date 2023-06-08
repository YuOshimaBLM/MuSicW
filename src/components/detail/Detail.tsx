/* eslint-disable @typescript-eslint/no-unused-vars */
import classes from "./Detail.module.scss";
import {
  DocumentData,
  addDoc,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db, storage } from "../../firebase";
import useCollection from "../../hooks/useCollection";

type props = {
  id: string;
  channel: DocumentData;
};

const Detail = () => {
  const [count, setCount] = useState();
  const firebaseConut = doc(db, "reviews", "pUDYbetB1MKUsbQmrysY");
  const firebaseTest = () => {
    updateDoc(firebaseConut, {
      count: count,
    });
  };

  const location = useLocation();
  const { channel } = location.state as DocumentData;
  console.log("DetailChannel", channel.id);
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
      <div>
        <button onClick={firebaseTest}>test</button>
      </div>
    </div>
  );
};

export default Detail;
