import "./style.scss";
import { GiHomeGarage } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import {
  BsArrowBarRight,
  BsArrowBarLeft,
  BsArrowLeftRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function DashboardListing() {
  return (
    <div>
      <p className="sectorName">Sector Name</p>
      <h1 className="dashboardL">Dashboard</h1>
      <div className="dashboardListing">
        <Link to="/storageDashboard" className="myStorageLink">
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
