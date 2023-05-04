import classes from "./Review.module.scss";

const Review = () => {
  return (
    <div className={classes.review}>
      <div className={classes.genre}>
        <p className={classes.genreText}>ジャンル</p>
        <select className={classes.genreSelect} name="genre">
          <option value="Jpop">Jpop</option>
          <option value="アニメ">アニメ</option>
          <option value="邦ロック">邦ロック</option>
          <option value="Kpop">Kpop</option>
          <option value="洋楽ポップス">洋楽ポップス</option>
          <option value="洋楽ロック">洋楽ロック</option>
        </select>
      </div>
      <div className={classes.title}>
        <p className={classes.titleText}>タイトル</p>
        <textarea className={classes.titleInput} name="title"></textarea>
      </div>
      <div className={classes.file}>
        <p className={classes.fileText}>画像</p>
        <input
          className={classes.fileInput}
          multiple
          type="file"
          name="imageURL"
        ></input>
      </div>
      <div className={classes.main}>
        <p className={classes.mainText}>本文</p>
        <textarea className={classes.mainInput} name="main"></textarea>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>送信</button>
      </div>
    </div>
  );
};

export default Review;
