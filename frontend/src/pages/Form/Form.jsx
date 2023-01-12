import logo from "@assets/logo.png";
import { useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./style.scss";

export default function Form() {
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    email: "",
    hashedpassword: "",
    birthdate: "",
    adress: "",
    role_id: 1,
    licence: 0,
  });
  const handleInput = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const inputRef = useRef();
  const hSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("license", inputRef.current.files[0]);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, users);
    swal({
      title: "Success",
      text: "Your account has been registered",
      icon: "success",
    });
  };
  return (
    <div className="style-form">
      <img className="logo" src={logo} alt="logo" />

      <form
        className="form-profil"
        encType="multipart/from-data"
        onSubmit={hSubmit}
      >
        <input
          className="form-details"
          type="text"
          placeholder="First name"
          name="firstname"
          value={users.firstname}
          onChange={handleInput}
          required
        />
        <input
          className="form-details"
          type="text"
          placeholder="Last name"
          name="lastname"
          value={users.lastname}
          onChange={handleInput}
          required
        />
        <input
          className="form-details"
          type="email"
          placeholder="Email"
          name="email"
          value={users.email}
          onChange={handleInput}
          required
        />
        <input
          className="form-details"
          type="password"
          placeholder="Password"
          name="hashedpassword"
          value={users.password}
          onChange={handleInput}
          required
        />
        <input
          className="form-details"
          type="date"
          placeholder="Birth date"
          name="birthdate"
          value={users.birthdate}
          onChange={handleInput}
          required
        />
        <input
          className="form-details"
          type="text"
          placeholder="Address"
          name="adress"
          value={users.address}
          onChange={handleInput}
          required
        />

        <label className="form-details" htmlFor="fileInput">
          I upload my licence:
          <input
            type="file"
            placeholder="I upload my licence:"
            name="monfichier"
            ref={inputRef}
          />
        </label>

        <button className="form-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
