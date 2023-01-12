import { useEffect, useState } from "react";
import axios from "axios";
import tunnel from "@assets/tunnel.png";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import swal from "sweetalert";
import { ImArrowLeft } from "react-icons/im";
import { GiHomeGarage } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./style.scss";

export default function CarTransfert() {
  const [carsTransfert, setCarsTransferts] = useState({
    nb_vehicles: "",
    time: "",
    silo_id_from: "",
    silo_id_to: "",
  });
  const [silos, setSilos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/silo`).then(({ data }) => {
      setSilos(data);
    });
  }, []);

  const handleInput = (e) => {
    setCarsTransferts({ ...carsTransfert, [e.target.name]: e.target.value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/transfert`, carsTransfert);
    swal({
      title: "Success",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div className="style-carTransfert">
      <h1 className="title-cartransfert titleVT">Vehicle transfer</h1>
      <div className="iconMenu">
        <Link to="/sectors">
          <button type="button" id="homeIcon">
            <GiHomeGarage className="icon" />
          </button>
        </Link>
        <Link to="/sectors/2">
          <button type="button" id="homeIcon">
            <ImArrowLeft className="icon" />
          </button>
        </Link>
      </div>
      <img className="tunnel" src={tunnel} alt="tunnel" />
      <section className="iconTitle">
        <BsArrowRightShort className="importIcon" />
        <h2 className="title-cartransfertTitle">To send</h2>
      </section>
      <form
        className="style-formCT"
        encType="multipart/from-data"
        onSubmit={hSubmit}
      >
        <input
          className="infos-to-sent"
          type="number"
          value={carsTransfert.nb_vehicles}
          placeholder="How many car to send ?"
          name="nb_vehicles"
          onChange={handleInput}
          required
        />
        <input
          className="infos-to-sent"
          type="time"
          placeholder="heure"
          value={carsTransfert.time}
          name="time"
          onChange={handleInput}
          required
        />
        <select className="infos-to-sent" required>
          <option value="---">From</option>
          {silos.map((silo) => {
            return (
              <option key={silo.id} value={carsTransfert.silo_id_from}>
                {silo.name} - {silo.localisation} - Capacity {silo.capacity}/
                {silo.max_capacity}
              </option>
            );
          })}
        </select>

        <select className="infos-to-sent" required>
          <option value="---">To</option>
          {silos.map((silo) => {
            return (
              <option key={silo.id} value={carsTransfert.silo_id_to}>
                {silo.name} - {silo.localisation} - Capacity {silo.capacity}/
                {silo.max_capacity}
              </option>
            );
          })}
        </select>
        <button className="transfert-btn" type="submit">
          Send
        </button>
      </form>
      <section className="iconTitle">
        <BsArrowLeftShort className="exportIcon" />
        <h2 className="title-cartransfertTitle">To request</h2>
      </section>
      <form
        className="style-formCT"
        encType="multipart/from-data"
        onSubmit={hSubmit}
      >
        <input
          className="infos-to-sent"
          type="number"
          placeholder="How many car to request ?"
          value={carsTransfert.nb_vehicles}
          name="nb_vehicles"
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
        <select className="infos-to-sent" required>
          <option value="---">From</option>
          {silos.map((silo) => {
            return (
              <option key={silo.id} value={silo.id}>
                {silo.name} - {silo.localisation} - Capacity {silo.capacity}/
                {silo.max_capacity}
              </option>
            );
          })}
        </select>

        <select className="infos-to-sent" required>
          <option value="---">To</option>
          {silos.map((silo) => {
            return (
              <option key={silo.id} value={silo.id}>
                {silo.name} - {silo.localisation} - Capacity {silo.capacity}/
                {silo.max_capacity}
              </option>
            );
          })}
        </select>

        <button className="transfert-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
