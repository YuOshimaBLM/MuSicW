import classes from "./Review.module.scss";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setUploaded] = useState(false);

  const OnFileUploadToFirebase = (e: any) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setUploaded(true);
      }
    );
  };
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
          accept=".png, .jpeg, .jpg"
          onChange={OnFileUploadToFirebase}
        ></input>
        {loading ? (
          <p className={classes.fileBoolean}>アップロード中...</p>
        ) : (
          <>
            {isUploaded ? (
              <p className={classes.fileBoolean}>
                ファイルアップロードが完了しました！
              </p>
            ) : (
              <p className={classes.fileBoolean}>
                ファイルが選択されていません
              </p>
            )}
          </>
        )}
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
