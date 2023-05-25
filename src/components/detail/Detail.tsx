import classes from "./Detail.module.scss";
import { DocumentData } from "firebase/firestore";

type props = {
  id: string;
  channel: DocumentData;
};

const Detail = (props: props) => {
  console.log(props.channel);
  // const { channel } = props;
  // console.log(channel);
  // const imageUrl = channel?.photoURL;

  return (
    <div className={classes.detail}>
      <div className={classes.TitleContainer}>
        <p className={classes.Title}>タイトル</p>
      </div>
      <div className={classes.createdAtContainer}>
        <p className={classes.createdAt}>2023/05/11</p>
      </div>
      <div className={classes.imageContainer}>
        {/* <img className={classes.image} alt="イメージ" src={imageUrl}></img> */}
      </div>
      <div className={classes.mainTextContainer}>
        <p>本文</p>
      </div>
    </div>
  );
};

export default Detail;
