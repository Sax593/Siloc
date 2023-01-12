import CarType from "@components/CarType/CarType";
import ListingCar from "@components/ListingCar/ListingCar";
import { GiHomeGarage } from "react-icons/gi";
import { ImArrowLeft } from "react-icons/im";
import { Link } from "react-router-dom";

import "./style.scss";

export default function CarListingScreen() {
  return (
    <>
      <h1 className="carsListTitle">List of cars</h1>
      <div className="iconMenu">
        <Link to="/sectors">
          <button type="button" className="homeIcon">
            <GiHomeGarage className="icon" />
          </button>
        </Link>
        <Link to="/carDashboard/2">
          <button type="button" className="homeIcon">
            <ImArrowLeft className="icon" />
          </button>
        </Link>
      </div>
      <section className="listingfilter">
        <section className="listingcar">
          <CarType />
          <ListingCar />
        </section>
      </section>
    </>
  );
}
