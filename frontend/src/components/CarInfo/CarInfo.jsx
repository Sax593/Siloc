import { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CarInfo() {
  const [vehicle, setVehicle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules/${id}`)
      .then(({ data }) => {
        setVehicle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <section className="carInfo">
      <div className="kilometers" key={vehicle.id}>
        {vehicle.mileage} km
      </div>
      <div className="lastRent">Last rent: {vehicle.lastrent}</div>
      <div className="kmRemaining">Kilometers remaining before maintenance</div>
      <div className="goToMaintenance">
        Go to maintenance : {vehicle.disponibility_id}
      </div>
    </section>
  );
}
