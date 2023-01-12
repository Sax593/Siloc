import "./style.scss";
import SiloCard from "@assets/maps/SiloCard.jpg";

export default function Geolocation() {
  return (
    <>
      <h2 className="h2Geolocation">Currently 34 cars are outside the silo</h2>
      <div className="mapWrapper">
        <img className="mapImg" alt="cars-mapping" src={SiloCard} />
      </div>
    </>
  );
}
