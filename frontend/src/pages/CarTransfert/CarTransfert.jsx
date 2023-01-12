import { useEffect, useState } from "react";
import axios from "axios";
import tunnel from "@assets/tunnel.png";
import { FcFeedIn, FcExport } from "react-icons/fc";
import swal from "sweetalert";
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
      <img className="tunnel" src={tunnel} alt="tunnel" />
      <h1 className="title-cartransfert">Vehicles transfer</h1>
      <h2 className="title-cartransfert">{FcExport} To send </h2>
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
      <h2 className="title-cartransfert">{FcFeedIn} To request</h2>

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
