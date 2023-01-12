import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import car2 from "@assets/cars_image/car2.png";

export default function BookingScreen() {
  return (
    <>
      <h1 className="titleBooking">Book a car</h1>
      <section className="carImage">
        <img className="electricCar1" src={car2} alt="ElectricCar" />
      </section>
      <DateTime />
    </>
  );
}
