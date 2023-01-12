import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import car3 from "@assets/cars_image/car2.png";

export default function BookingScreen() {
  return (
    <>
      <h1 className="titleBooking">Book a car</h1>
      <section className="carImage">
        <img className="electricCar3" src={car3} alt="ElectricCar" />
      </section>
      <DateTime />
    </>
  );
}
