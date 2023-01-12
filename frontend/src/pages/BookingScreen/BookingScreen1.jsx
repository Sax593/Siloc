import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import car1 from "@assets/cars_image/car1.png";

export default function BookingScreen() {
  return (
    <>
      <h1 className="titleBooking">Book a car</h1>
      <section className="carImage">
        <img className="electricCar1" src={car1} alt="ElectricCar" />
      </section>
      <DateTime />
    </>
  );
}
