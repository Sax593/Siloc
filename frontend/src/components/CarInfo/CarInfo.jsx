import { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CarInfo() {
  const [vehicle, setVehicle] = useState([]);
  const [status, setStatus] = useState("unavailable");
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
    if (vehicle.disponibility_id === 1) {
      setStatus("available");
    } else if (vehicle.disponibility_id === 2) {
      setStatus("rented");
    } else {
      setStatus("storage process");
    }
  }, []);

  return (
    <section className="carInfo">
      <div className="kilometers" key={vehicle.id}>
        {vehicle.mileage} km
      </div>
      <div className="lastRent">Last rent: {vehicle.lastrent}</div>
      <div className="kmRemaining">
        {10000 - vehicle.mileage} Miles remaining before maintenance
      </div>
      <div className="goToMaintenance">Go to maintenance : {status}</div>
    </section>
  );
}
