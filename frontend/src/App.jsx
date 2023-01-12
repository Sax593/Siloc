import { Route, Routes } from "react-router-dom";
import Checkout from "@pages/Checkout/Checkout";
import Home from "@pages/Home/Home";
import CarDashboardBySilo from "@pages/CarDashboardBySilo/CarDashboardBySilo";
import CarTransfert from "@pages/CarTransfert/CarTransfert";
import BookingScreen from "@pages/BookingScreen/BookingScreen";
import BookingScreen1 from "@pages/BookingScreen/BookingScreen1";
import BookingScreen2 from "@pages/BookingScreen/BookingScreen2";
import BookingScreen3 from "@pages/BookingScreen/BookingScreen3";
import Form from "@pages/Form/Form";
import OrderSumup from "@pages/OrderSumup/OrderSumup";
import Geolocation from "@pages/Geolocation/Geolocation";
import StorageDashboardBySilo from "@pages/StorageDashboardBySilo/StorageDashboardBySilo";
import DashboardListing from "@pages/DashboardListing/DashboardListing";
import ValidationScreen from "@pages/ValidationScreen/Validation";
import SectorListing from "@pages/SectorListing/SectorListing";
import SingleCarScreen from "@pages/SingleCarScreen/SingleCarScreen";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingtype" element={<BookingScreen />} />
      <Route path="/bookingtype1" element={<BookingScreen1 />} />
      <Route path="/bookingtype2" element={<BookingScreen2 />} />
      <Route path="/bookingtype3" element={<BookingScreen3 />} />
      <Route path="/form" element={<Form />} />
      <Route path="/carTransfert" element={<CarTransfert />} />
      <Route path="/car/:id" element={<SingleCarScreen />} />
      <Route path="/dashboardListing" element={<DashboardListing />} />
      <Route path="/carDashboard" element={<CarDashboardBySilo />} />
      <Route
        path="/storageDashboard/:id"
        element={<StorageDashboardBySilo />}
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<OrderSumup />} />
      <Route path="/geolocation" element={<Geolocation />} />
      <Route path="/validationScreen" element={<ValidationScreen />} />
      <Route path="/sectors" element={<SectorListing />} />
    </Routes>
  );
}

export default App;
