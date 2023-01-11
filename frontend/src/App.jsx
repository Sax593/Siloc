import Checkout from "@pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
