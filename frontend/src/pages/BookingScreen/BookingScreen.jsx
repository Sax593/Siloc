import "./style.scss";
import DateTime from "@components/DateTime/DateTime";
import logo from "@assets/logo.png";

export default function BookingScreen() {
  return (
    <>
      <h1 className="titleBooking">Book a car</h1>
      <section className="carImage">
        <img className="electricCar1" src={logo} alt="ElectricCar" />
      </section>
      <DateTime />
    </>
  );
}
