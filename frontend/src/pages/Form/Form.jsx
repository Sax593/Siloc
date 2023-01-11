import "./style.scss";
import logoSmall from "@assets/logoSmall.png";
import { useState, useRef } from "react";
import axios from "axios";

export default function Form() {
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    email: "",
    birthdate: "",
    adress: "",
    type: "",
  });
  const handleInput = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  axios.post("http://localhost:5000/users", users);

  const inputRef = useRef();
  const hSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("license", inputRef.current.files[0]);
    axios.post("http://localhost:5000/api/licence", formData);
  };
  return (
    <div className="style-form">
      <img className="logo" src={logoSmall} alt="logo" />

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
          <input type="file" name="monfichier" ref={inputRef} />
        </label>

        <button className="form-details" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
