// import axios from "axios";
import { useState } from "react";
import "./style.scss";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  // const inputRef = useRef();

  const hChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    let newValue = null;
    switch (type) {
      case "checkbox":
        newValue = checked;
        break;
      case "file":
        return;
      default:
        newValue = value;
    }
    setFormData({ ...formData, [name]: newValue });
  };
  // const hSubmit = (evt) => {
  //   evt.preventDefault();

  //   axios
  //     .post("/auth/login", formData)
  //     .then(({ data }) => {
  //       const { token, user } = data;
  //       axios.defaults.headers.authorization = `Bearer ${token}`;
  //       dispatch({ type: "USER_LOGIN", payload: { ...user, token } });
  //       console.warn(
  //         "TODO !!! Remove token from Redux and implement httpOnly cookie !"
  //       );
  //       send.status(201);
  //     })
  //     .catch(() => {
  //       send.status(500);
  //     });
  // };
  return (
    <div className="lgForm">
      <legend className="loginh4">Log in your next trip over city</legend>
      <h4 className="loginh4">E-mail: </h4>
      <input
        className="logininp"
        type="text"
        id="username"
        name="name"
        value={formData.name}
        onChange={hChange}
      />
      <h4 className="loginh4">Password:</h4>
      <input
        className="logininp"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={hChange}
      />
      <button className="loginbtn" type="submit">
        Log In!
      </button>
      <a className="loginh4" href="/form">
        Register
      </a>
    </div>
  );
}
