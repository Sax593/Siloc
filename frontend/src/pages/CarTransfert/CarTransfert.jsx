import axios from "axios";
import { useState } from "react";
import tunnel from "@assets/tunnel.png";
import "./style.scss";

export default function CarTransfert() {
  const [carsTransfert, setCarsTransferts] = useState({
    nbCarsToTransfer: "",
    time: "",
  });

  const handleInput = (e) => {
    setCarsTransferts({ ...carsTransfert, [e.target.name]: e.target.value });
  };

  axios.post("http://localhost:5000/transfert", carsTransfert);

  const hSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="style-carTransfert">
      <img className="tunnel" src={tunnel} alt="tunnel" />
      <h1 className="title-cartransfert">Vehicle transfer</h1>
      <h2 className="title-cartransfert">To send</h2>
      <form
        className="style-form"
        encType="multipart/from-data"
        onSubmit={hSubmit}
      >
        <input
          className="infos-to-sent"
          type="number"
          value={carsTransfert.nb_vehicles}
          placeholder="How many car to send ?"
          name="nbCarsToTransfer"
          onChange={handleInput}
          required
        />

        <input
          className="infos-to-sent"
          type="time"
          placeholder="to"
          value={carsTransfert.time}
          name="time"
          onChange={handleInput}
          required
        />

        <button className="transfert-btn" type="submit">
          Send
        </button>
      </form>

      <h2 className="title-cartransfert">To request</h2>

      <form
        className="style-form"
        encType="multipart/from-data"
        onSubmit={hSubmit}
      >
        <input
          className="infos-to-sent"
          type="number"
          placeholder="How many car to request ?"
          value={carsTransfert.nb_vehicles}
          name="nbCarsToTransfer"
          onChange={handleInput}
          required
        />

        <input
          className="infos-to-sent"
          type="time"
          placeholder="to"
          value={carsTransfert.time}
          name="time"
          onChange={handleInput}
          required
        />

        <button className="transfert-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
