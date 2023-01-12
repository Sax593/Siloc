import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import CarImage from "@components/CarImage/CarImage";
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
      <CarImage />
      <DateTime data={data} setData={setData} />
    </>
  );
}
