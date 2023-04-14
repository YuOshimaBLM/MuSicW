import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h3 className={classes.logo}>MusicW</h3>
      <nav>
        <ul>
          <li>Top</li>
          <li>Review</li>
          <li>Mypage</li>
          <li>Message</li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
