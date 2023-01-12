import { Route, Routes } from "react-router-dom";
import Checkout from "@pages/Checkout/Checkout";
import Home from "@pages/Home/Home";
import SingleCarScreen from "@pages/SingleCarScreen/SingleCarScreen";
import CarDashboardBySilo from "@pages/CarDashboardBySilo/CarDashboardBySilo";
import BookingScreen from "@pages/BookingScreen/BookingScreen";
import Form from "@pages/Form/Form";
import OrderSumup from "@pages/OrderSumup/OrderSumup";
import StorageDashboardBySilo from "@pages/StorageDashboardBySilo/StorageDashboardBySilo";
import DashboardListing from "@pages/DashboardListing/DashboardListing";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingScreen" element={<BookingScreen />} />
      <Route path="/form" element={<Form />} />
      <Route path="/car/:id" element={<SingleCarScreen />} />
      <Route path="/dashboardListing" element={<DashboardListing />} />
      <Route path="/carDashboard" element={<CarDashboardBySilo />} />
      <Route path="/storageDashboard" element={<StorageDashboardBySilo />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<OrderSumup />} />
    </Routes>
  );
}

export default App;
