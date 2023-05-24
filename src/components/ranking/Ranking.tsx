import classes from "./Ranking.module.scss";
import { DocumentData } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setReviewInfo } from "../../features/reviewSlice";

type props = {
  id: string;
  channel: DocumentData;
};

const Ranking = (props: props) => {
  const { channel } = props;
  const navigate = useNavigate();

  const sendDetail = () => {
    navigate("/detail", { state: { channel } });
    console.log("state", channel);
  };

  return (
    <ul className={classes.ulBody}>
      <li>1位</li>
      <img
        onClick={sendDetail}
        className={classes.photoImage}
        src={channel.channel.photoURL}
        alt="イメージ"
      />
      <br></br>
      <h3 className={classes.Title}>{channel.channel.titleName}</h3>
    </ul>
  );
};

export default Ranking;
