import "./style.scss";

export default function LoginForm() {
  return (
    <div className="lgForm">
      <h4 className="loginh4">E-mail: </h4>
      <input className="logininp" type="text" id="username" />
      <h4 className="loginh4">Password:</h4>
      <input className="logininp" type="password" id="password" />
      <button className="loginbtn" type="button">
        Log In!
      </button>
      <a className="loginh4" href="/form">
        Register
      </a>
    </div>
  );
}
