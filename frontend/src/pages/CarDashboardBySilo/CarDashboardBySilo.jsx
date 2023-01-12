import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { GiHomeGarage } from "react-icons/gi";
import "./style.scss";

export default function CarDashboardBySilo() {
  const [dispo, setDispo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/silo/${id}`)
      .then(({ data }) => {
        setDispo(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <p className="sectorName">{dispo.name}</p>
      <h1 className="currentCars">My current cars</h1>
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
      <div className="dashboardCarsBySilo">
        <Link className="avalaibleCars" to="/listingcar">
          <button type="button" className="btndashboard">
            33 cars available
          </button>
        </Link>
        <Link className="outsideCars" to="/listingcar">
          <button type="button" className="btndashboard">
            28 cars outside
          </button>
        </Link>
        <Link className="toCheckCars" to="/listingcar">
          <button type="button" className="btndashboard">
            12 cars to check
          </button>
        </Link>
        <Link className="maintenance" to="/listingcar">
          <button type="button" className="btndashboard">
            3 cars on maintenance
          </button>
        </Link>
      </div>
    </div>
  );
}
