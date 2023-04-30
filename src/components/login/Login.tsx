import classes from "./Login.module.scss";

const Login = () => {
  return (
    <div className={classes.Login}>
      <div className={classes.Title}>ログイン画面</div>
      <div className={classes.LoginID}>
        <div className={classes.LoginIDBoeder}>ログインID</div>
        <input
          className={classes.LoginIDInput}
          type="text"
          name="LoginID"
        ></input>
      </div>
      <div className={classes.Password}>
        <div className={classes.PasswordBoeder}>パスワード</div>
        <input
          className={classes.PasswordInput}
          type="password"
          name="Passwoed"
        ></input>
      </div>
      <button className={classes.LoginButton}>ログイン</button>
    </div>
  );
};

export default Login;
