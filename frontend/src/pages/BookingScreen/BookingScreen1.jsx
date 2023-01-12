import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import { useState } from "react";
import car1 from "@assets/cars_image/car1.png";

export default function BookingScreen() {
  const [data, setData] = useState({
    vehicle_type: "",
    departure_date: "",
    arrival_date: "",
    silo_id: "",
  });

  return (
    <>
      <h1 className="titleBooking">Book a car</h1>
      <section className="carImage">
        <img className="electricCar1" src={car1} alt="ElectricCar" />
      </section>
      <DateTime data={data} setData={setData} />
    </>
  );
}
