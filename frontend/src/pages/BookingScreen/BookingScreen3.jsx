import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import { useState } from "react";
import car3 from "@assets/cars_image/car3.png";

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
        <img className="electricCar3" src={car3} alt="ElectricCar" />
      </section>
      <DateTime data={data} setData={setData} />
    </>
  );
}
