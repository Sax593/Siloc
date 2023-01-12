import { Route, Routes } from "react-router-dom";
import Checkout from "@pages/Checkout/Checkout";
import Home from "@pages/Home/Home";
import CarDashboardBySilo from "@pages/CarDashboardBySilo/CarDashboardBySilo";
import CarTransfert from "@pages/CarTransfert/CarTransfert";
import BookingScreen from "@pages/BookingScreen/BookingScreen";
import Form from "@pages/Form/Form";
import OrderSumup from "@pages/OrderSumup/OrderSumup";
import Geolocation from "@pages/Geolocation/Geolocation";
import StorageDashboardBySilo from "@pages/StorageDashboardBySilo/StorageDashboardBySilo";
import DashboardListing from "@pages/DashboardListing/DashboardListing";
import ValidationScreen from "@pages/ValidationScreen/Validation";
import SectorListing from "@pages/SectorListing/SectorListing";
import SingleCarScreen from "@pages/SingleCarScreen/SingleCarScreen";
import "./App.scss";
import CarListingScreen from "@pages/CarListingScreen/CarListingScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingScreen" element={<BookingScreen />} />
      <Route path="/form" element={<Form />} />
      <Route path="/carTransfert" element={<CarTransfert />} />
      <Route path="/car/:id" element={<SingleCarScreen />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<OrderSumup />} />
      <Route path="/geolocation" element={<Geolocation />} />
      <Route path="/validationScreen" element={<ValidationScreen />} />
      <Route path="/sectors" element={<SectorListing />} />
      <Route path="/sectors/:id" element={<DashboardListing />} />
      <Route
        path="/storageDashboard/:id"
        element={<StorageDashboardBySilo />}
      />
      <Route path="/listingcar" element={<CarListingScreen />} />

      <Route path="/carDashboard/:id" element={<CarDashboardBySilo />} />
    </Routes>
  );
}

export default App;
