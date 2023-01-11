import "./style.scss";
import car1 from "../../assets/cars_image/car1.png";

export default function CarImage() {
  return (
    <section className="carImage">
      <img className="electricCar1" src={car1} alt="ElectricCar" />
    </section>
  );
}
