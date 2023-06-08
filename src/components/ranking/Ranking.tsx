import classes from "./Ranking.module.scss";
import { DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";

type props = {
  id: string;
  channel: DocumentData;
};

const Ranking = (props: props) => {
  const { channel } = props;
  console.log("Rankingchannel", channel);

  return (
    <ul className={classes.ulBody}>
      <li>1位</li>
      <Link to={"/detail"} state={channel} id={channel.id} key={channel.id}>
        <img
          // onClick={sendDetail}
          className={classes.photoImage}
          src={channel.channel.photoURL}
          alt="イメージ"
        />
      </Link>
      <br></br>
      <h3 className={classes.Title}>{channel.channel.titleName}</h3>
    </ul>
  );
};

export default Ranking;
