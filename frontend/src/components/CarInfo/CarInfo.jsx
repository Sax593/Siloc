import { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

export default function CarInfo() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules/2`, vehicle)
      .then(({ data }) => {
        setVehicle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="carInfo">
      <div className="kilometers">
        {vehicle.map((element) => {
          return <p key={element.id}>{element.mileage}</p>;
        })}
      </div>
      <div className="lastRent">Last rent</div>
      <div className="kmRemaining">Kilometers remaining before maintenance</div>
      <div className="goToMaintenance">Go to maintenance</div>
    </section>
  );
}
