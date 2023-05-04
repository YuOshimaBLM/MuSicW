import classes from "./Ranking.module.scss";
import { DocumentData } from "firebase/firestore";

type props = {
  id: string;
  channel: DocumentData;
};

const Ranking = (props: props) => {
  const { id, channel } = props;
  return (
    <ul className={classes.ulBody}>
      <li>1位</li>
      <img src="https://via.placeholder.com/260" />
      <br></br>
      <h3 className={classes.Title}>{channel.channel.TitleName}</h3>
    </ul>
  );
};

export default Ranking;
