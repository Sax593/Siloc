import "./style.scss";
import car2 from "@assets/cars_image/car2.png";
import { Link } from "react-router-dom";

export default function ValidationScreen() {
  return (
    <>
      <h2 className="h2ValidationMessage">Thank you for your feedback!</h2>
      <p className="ValidationMessage">
        Have a nice trip with Siloc, the future of riding.
      </p>
      <div className="imgCar2Wrapper">
        <img className="futurCar2" src={car2} alt="futurCar2" />
      </div>
      <Link className="buttonHomeWrapper" to="/">
        <button className="buttonReturnToHome" type="button">
          Log Out
        </button>
      </Link>
    </>
  );
}
