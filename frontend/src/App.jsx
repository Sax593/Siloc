import BookingScreen from "@pages/BookingScreen/BookingScreen";
import Home from "@pages/Home/Home";
import Checkout from "@pages/Checkout/Checkout";
import { Route, Routes } from "react-router-dom";
import SingleCarScreen from "@pages/SingleCarScreen/SingleCarScreen";
import CarDashboardBySilo from "@pages/CarDashboardBySilo/CarDashboardBySilo";
import "./App.scss";

import Form from "@pages/Form/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingScreen" element={<BookingScreen />} />
      <Route path="/form" element={<Form />} />
      <Route path="/car" element={<SingleCarScreen />} />
      <Route path="/dashboard" element={<CarDashboardBySilo />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
