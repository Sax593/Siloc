// import Home from "@pages/Home/Home";
import BookingScreen from "@pages/BookingScreen/BookingScreen";
import Home from "@pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookingScreen" element={<BookingScreen />} />
    </Routes>
  );
}

export default App;
