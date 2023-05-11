import classes from "./Ranking.module.scss";
import { DocumentData } from "firebase/firestore";

type props = {
  id: string;
  channel: DocumentData;
};

const Ranking = (props: props) => {
  const { channel } = props;

  return (
    <ul className={classes.ulBody}>
      <li>1位</li>
      <img className={classes.photoImage} src={channel.channel.photoURL} />
      <br></br>
      <h3 className={classes.Title}>{channel.channel.titleName}</h3>
    </ul>
  );
};

export default Ranking;
