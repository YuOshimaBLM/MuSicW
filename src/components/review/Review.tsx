import classes from "./Review.module.scss";
import { db, storage } from "../../firebase";
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAppSelector } from "../../app/hooks";

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setUploaded] = useState(false);
  const [title, setTitle] = useState("");

  const user = useAppSelector((state) => state.user);

  const addReview = async () => {
    await addDoc(collection(db, "reviews"), {
      titleName: title,
      uid: { user },
      photoURL: "",
      createdAt: serverTimestamp(),
    });
  };

  const OnFileUploadToFirebase = (e: any) => {
    const file = e.target.files[0];
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;
    const filePath = `images/${fileName}`;
    const storageRef = ref(storage, filePath);
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
        const newImage: {
          id: string;
          path: (ref: StorageReference) => Promise<string>;
        } = { id: fileName, path: getDownloadURL };
        console.log(newImage.path);
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
        <form>
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            className={classes.titleInput}
            name="title"
          ></textarea>
        </form>
      </div>
      <div className={classes.file}>
        <p className={classes.fileText}>画像</p>
        <label>
          <input
            className={classes.fileInput}
            multiple
            type="file"
            id="image"
            name="imageURL"
            accept=".png, .jpeg, .jpg"
            onChange={OnFileUploadToFirebase}
          ></input>
          {loading ? (
            <p className={classes.fileUploading}>アップロード中...</p>
          ) : (
            <>
              {isUploaded ? (
                <>
                  {/* <img alt="プレビュー画像" src={newImage.path}></img> */}
                  <p className={classes.fileTrue}>
                    ファイルアップロードが完了しました！
                  </p>
                </>
              ) : (
                <div className={classes.materialIconContainer}>
                  <AddPhotoAlternateIcon className={classes.materialIcon} />
                  <p className={classes.fileFalse}>ファイルを選択</p>
                </div>
              )}
            </>
          )}
        </label>
      </div>
      <div className={classes.main}>
        <p className={classes.mainText}>本文</p>
        <textarea className={classes.mainInput} name="main"></textarea>
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={addReview} className={classes.button}>
          送信
        </button>
      </div>
    </div>
  );
};

export default Review;
