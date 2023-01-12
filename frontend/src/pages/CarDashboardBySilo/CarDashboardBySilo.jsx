// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import "./style.scss";

export default function CarDashboardBySilo() {
  // const [dispo, setDispo] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules/${id}`)
  //     .then(({ data }) => {
  //       setDispo(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  return (
    <div>
      <p className="sectorName">Sector Name</p>
      <h1 className="currentCars">My current cars</h1>
      <div className="dashboardCarsBySilo">
        <button type="button" className="avalaibleCars">
          33 cars available
        </button>
        <button type="button" className="outsideCars">
          28 cars outside
        </button>
        <button type="button" className="toCheckCars">
          12 cars to check
        </button>
        <button type="button" className="maintenance">
          3 cars on maintenance
        </button>
      </div>
    </div>
  );
}
