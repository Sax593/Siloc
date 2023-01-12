import "./style.scss";
import SiloCard from "@assets/maps/SiloCard.jpg";
import { ImArrowLeft } from "react-icons/im";
import { GiHomeGarage } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Geolocation() {
  return (
    <>
      <h2 className="h2Geolocation">Currently 34 cars are outside the silo</h2>
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
      <div className="mapWrapper">
        <img className="mapImg" alt="cars-mapping" src={SiloCard} />
      </div>
    </>
  );
}
