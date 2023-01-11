import "./style.scss";

export default function CarInfo() {
  return (
    <section className="carInfo">
      <div className="kilometers">Kilometers</div>
      <div className="lastRent">Last rent</div>
      <div className="kmRemaining">Kilometers remaining before maintenance</div>
      <div className="goToMaintenance">Go to maintenance</div>
    </section>
  );
}
