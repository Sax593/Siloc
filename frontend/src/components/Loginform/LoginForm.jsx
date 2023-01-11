import "./style.scss";

export default function LoginForm() {
  return (
    <div className="lgForm">
      <h4 className="loginh4">E-mail: </h4>
      <input
        className="logininp"
        type="text"
        placeholder="Email"
        id="username"
      />
      <h4 className="loginh4">Password:</h4>
      <input
        className="logininp"
        type="password"
        placeholder="Password"
        id="password"
      />
      <button className="loginbtn" type="button">
        Log In!
      </button>
    </div>
  );
}
