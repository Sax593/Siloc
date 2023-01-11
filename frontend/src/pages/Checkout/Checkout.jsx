import "./style.scss";

export default function Checkout() {
  return (
    <>
      Your order has been completed!
      <br />
      <br />
      Please scan your QR Code directly at the entrance of the silo.
      <br />
      <br />
      <img
        className="MyQRCode"
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png"
        alt="qrcode"
      ></img>
      <br />
      <br />
      <form>
        <input type="checkbox" id="order" value="isok"></input>
        <label for="filters">My car is ready to use?</label>
        <br />
        <br />
      </form>
      <textarea name="customerFeedback" id="" cols="30" rows="10"></textarea>
      <br />
      <br />
      <button> Send</button>
    </>
  );
}
