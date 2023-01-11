import CarImage from "@components/CarImage/CarImage";
import CarInfo from "@components/CarInfo/CarInfo";
import "./style.scss";

export default function SingleCarScreen() {
  return (
    <div className="carPage">
      <section className="carOverview">
        <CarImage />
      </section>
      <section className="carInfoOverview">
        <CarInfo />
      </section>
    </div>
  );
}
