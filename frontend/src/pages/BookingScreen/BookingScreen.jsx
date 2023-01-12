import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import logo from "@assets/logo.png";
import { useState } from "react";

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
        <img className="electricCar1" src={logo} alt="ElectricCar" />
      </section>
      <DateTime data={data} setData={setData} />
    </>
  );
}
