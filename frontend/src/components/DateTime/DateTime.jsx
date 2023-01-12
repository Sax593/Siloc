import propTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DateTime({ data, setData }) {
  const hChange = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post("http://localhost:5000/booking", data).catch((error) => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={hSubmit} className="DateTime">
      <div className="CarType">
        <Link to="/BookingType1">
          <button type="button" className="BookingType">
            Type 1{" "}
          </button>
        </Link>
        <Link to="/BookingType2">
          <button type="button" className="BookingType">
            Type 2{" "}
          </button>
        </Link>
        <Link to="/BookingType3">
          <button type="button" className="BookingType">
            Type 3{" "}
          </button>
        </Link>
      </div>
      <div className="DateTime">
        <label className="ADDate">
          Départ
          <input
            name="departure_date"
            defaultValue={data.departure_date}
            type="time"
            onChange={hChange}
          />
        </label>
        <label className="ADDate">
          Arrivée
          <input
            name="arrival_date"
            defaultValue={data.arrival_date}
            type="time"
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
DateTime.propTypes = {
  data: propTypes.shape({
    departure_date: propTypes.string.isRequired,
    arrival_date: propTypes.string.isRequired,
    silo_id: propTypes.string.isRequired,
  }).isRequired,
  setData: propTypes.func.isRequired,
};
