import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
