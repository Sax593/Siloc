import Orderinfo from "@components/OrderInfo/OrderInfo";
import { Link } from "react-router-dom";
import "./style.scss";

export default function OrderSumup() {
  return (
    <section className="orderpage">
      <h2 className="ordertitle">Order Sumup</h2>
      <Orderinfo />
      <Link className="buttonprocess" to="/checkout">
        <button type="button" className="processbtn">
          Proceed
        </button>
      </Link>
    </section>
  );
}
