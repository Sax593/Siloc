import CarImage from "@components/CarImage/CarImage";
import CarInfo from "@components/CarInfo/CarInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { GiHomeGarage } from "react-icons/gi";
import "./style.scss";

export default function SingleCarScreen() {
  const [vehicle, setVehicle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules/${id}`)
      .then(({ data }) => {
        setVehicle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="carPage">
      <h1 className="modelCar">
        {vehicle.brand} - {vehicle.model}
      </h1>
      <h2 className="typeCar">{vehicle.type}</h2>
      <div className="iconMenu">
        <Link to="/sectors">
          <button type="button" id="homeIcon">
            <GiHomeGarage className="icon" />
          </button>
        </Link>
        <Link to="/listingcar">
          <button type="button" id="homeIcon">
            <ImArrowLeft className="icon" />
          </button>
        </Link>
      </div>
      <section className="carOverview">
        <CarImage />
      </section>
      <section className="carInfoOverview">
        <CarInfo />
      </section>
    </div>
  );
}
