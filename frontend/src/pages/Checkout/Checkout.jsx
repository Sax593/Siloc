import "./style.scss";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <>
      <h2 className="h2Order">Your order has been completed!</h2>
      <p className="QRCodeParagraph">
        Please scan your QR Code directly at the entrance of the silo.
      </p>
      <div className="imgWrapper">
        <img
          className="MyQRCode"
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png"
          alt="qrcode"
        />
      </div>
      <form className="MyCarIsReady">
        <input type="checkbox" id="order" value="isok" />
        <label className="orderCheckbox" htmlFor="filters">
          My car is ready to use?
        </label>
      </form>
      <div className="txtArea">
        <textarea
          name="customerFeedback"
          id=""
          cols="30"
          rows="10"
          placeholder="Tell us how fine is your car?"
        />
      </div>
      <Link className="buttonWrapper" to="/validationScreen">
        <button className="sendCustomerFeedback" type="button">
          Send
        </button>
      </Link>
    </>
  );
}
