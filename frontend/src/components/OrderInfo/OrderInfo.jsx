import image from "@assets/cars_image/car1.png";
import "./style.scss";

export default function Orderinfo() {
  return (
    <section className="orderdescription">
      <img className="orderedvehicles" src={image} alt="your lacated car" />
      <article className="orderinfo">
        <p>Date: 11/01/2050</p>
        <p>Location: Paris Nord</p>
      </article>
      <div className="ordercgv">
        <input id="cgv" name="cgv" type="checkbox" />
        <label className="labelcgv" htmlFor="cgv">
          Accept General terms and conditions
        </label>
      </div>
    </section>
  );
}
