import "./style.scss";
import { car1 } from "../../assets/cars_image/car1.png";

export default function CarImage() {
  return (
    <div className="carImage">
      <img src={car1} alt="ElectricCar" />
    </div>
  );
}
