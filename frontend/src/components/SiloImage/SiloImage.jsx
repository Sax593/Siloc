import "./style.scss";
import silo1 from "../../assets/silo_image/Silo1.png";

export default function SiloImage() {
  return (
    <section className="siloImage">
      <img className="silo1" src={silo1} alt="Silo1" />
    </section>
  );
}
