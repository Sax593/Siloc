import { Route, Routes } from "react-router-dom";
import Checkout from "@pages/Checkout/Checkout";
import Home from "@pages/Home/Home";
import SingleCarScreen from "@pages/SingleCarScreen/SingleCarScreen";
import CarDashboardBySilo from "@pages/CarDashboardBySilo/CarDashboardBySilo";
import CarTransfert from "@pages/CarTransfert/CarTransfert";
import BookingScreen from "@pages/BookingScreen/BookingScreen";
import Form from "@pages/Form/Form";
import OrderSumup from "@pages/OrderSumup/OrderSumup";
import Geolocation from "@pages/Geolocation/Geolocation";
import StorageDashboardBySilo from "@pages/StorageDashboardBySilo/StorageDashboardBySilo";
import "./App.scss";
import ValidationScreen from "@pages/ValidationScreen/Validation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingScreen" element={<BookingScreen />} />
      <Route path="/form" element={<Form />} />
      <Route path="/carTransfert" element={<CarTransfert />} />
      <Route path="/car/:id" element={<SingleCarScreen />} />
      <Route path="/carDashboard" element={<CarDashboardBySilo />} />
      <Route path="/storageDashboard" element={<StorageDashboardBySilo />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<OrderSumup />} />
      <Route path="/geolocation" element={<Geolocation />} />
      <Route path="/validationScreen" element={<ValidationScreen />} />
    </Routes>
  );
}

export default App;
