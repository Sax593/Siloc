import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.scss";

export default function LoginForm() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/2`)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
  const isItUsers = (evt) => {
    evt.preventDefault();
    if (
      formData.name === users.email &&
      formData.password === users.hashedpassword
    ) {
      Swal.fire({
        title: "Welcome",
        text: "Login success!",
        icon: "success",
      });

      navigate("/bookingscreen");
    } else if (
      formData.name === "waquetv@siloc.com" &&
      formData.password === users.hashedpassword
    ) {
      Swal.fire({
        title: "Welcome",
        text: "Login sucess!",
        icon: "success",
      });
      navigate("/sectors");
    } else {
      Swal.fire({
        title: "Failed",
        text: "Login failed!",
        icon: "error",
      });
    }
  };
  return (
    <form className="lgForm" onSubmit={isItUsers}>
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
    </form>
  );
}
