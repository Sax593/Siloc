import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function DateTime() {
  const [data, setData] = useState({
    vehicle_type: "Electric",
    departure_time: "",
    arrival_time: "",
    silo_id: "",
    users_id: 2,
  });
  const navigate = useNavigate();
  const hChange = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/booking`, data)
      .catch((error) => {
        console.error(error);
      });
    navigate("/order");
  };

  return (
    <form onSubmit={hSubmit} className="DateTime">
      <div className="CarType">
        <Link to="/BookingType1">
          <button type="button" className="BookingType">
            Type 1
          </button>
        </Link>
        <Link to="/BookingType2">
          <button type="button" className="BookingType">
            Type 2
          </button>
        </Link>
        <Link to="/BookingType3">
          <button type="button" className="BookingType">
            Type 3
          </button>
        </Link>
      </div>
      <div className="DateTime">
        <label className="ADDate">
          Départ
          <input
            name="departure_time"
            defaultValue={data.departure_time}
            type="datetime-local"
            onChange={hChange}
          />
        </label>
        <label className="ADDate">
          Arrivée
          <input
            name="arrival_time"
            defaultValue={data.arrival_time}
            type="datetime-local"
            onChange={hChange}
          />
        </label>
      </div>
      <div className="ChooseSilo">
        <label className="listSilo">
          Choose your silo
          <select
            className="localisationInput"
            onChange={hChange}
            name="silo_id"
            required
          >
            <option value={data.silo_id}>Localisation</option>
            <option value={1}>Portes des Lilas</option>
            <option value={2}>Gare du Nord</option>
            <option value={3}>Victor Hugo</option>
            <option value={4}>Croix rouge </option>
            <option value={5}>Porte Molitor</option>
          </select>
        </label>
      </div>
      <div className="ButtonOk">
        <button type="submit" className="submit">
          OK
        </button>
      </div>
    </form>
  );
}
