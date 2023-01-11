import "./Style.scss";

export default function LoginForm() {
  return (
    <div className="lgForm">
      <p>je suis ici</p>
      <input type="text" placeholder="Email" id="username" />
      <input type="password" placeholder="Password" id="password" />
      <button type="button">Log In!</button>
    </div>
  );
}
