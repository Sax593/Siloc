import { GiHomeGarage } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import {
  BsArrowBarRight,
  BsArrowBarLeft,
  BsArrowLeftRight,
} from "react-icons/bs";
import { ImArrowLeft } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";

export default function DashboardListing() {
  const [storage, setStorage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/silo/${id}`)
      .then(({ data }) => {
        setStorage(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <p className="sectorName">{storage.name}</p>
      <h1 className="dashboardL">Dashboard</h1>
      <div className="iconMenu">
        <Link to="/sectors">
          <button type="button" className="homeIcon">
            <GiHomeGarage className="icon" />
          </button>
        </Link>
        <Link to="/sectors">
          <button type="button" className="homeIcon">
            <ImArrowLeft className="icon" />
          </button>
        </Link>
      </div>
      <div className="dashboardListing">
        <Link
          to={{ pathname: `/storageDashboard/${storage.id}` }}
          className="myStorageLink"
        >
          <button type="button" className="storage">
            <GiHomeGarage className="iconDB" />
            <h4 className="textDL">Storage</h4>
          </button>
        </Link>
        <Link to="/carDashboard" className="myCurrentCarsLink">
          <button type="button" className="myCurrentCars">
            <AiFillCar className="iconDB" />
            <BsArrowBarLeft className="iconDB" />
            <h4 className="textDL">My current cars</h4>
          </button>
        </Link>
        <Link to="/geolocation" className="myOutsideLink">
          <button type="button" className="myOutsideCars">
            <AiFillCar className="iconDB" />
            <BsArrowBarRight className="iconDB" />
            <h4 className="textDL">My outside cars</h4>
          </button>
        </Link>
        <Link to="/transfer" className="myTransfertLink">
          <button type="button" className="carTransfert">
            <AiFillCar className="iconDB" />
            <BsArrowLeftRight className="iconDB" />
            <h4 className="textDL">Car transfert</h4>
          </button>
        </Link>
      </div>
    </div>
  );
}
