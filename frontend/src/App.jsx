import { Route, Routes } from "react-router-dom";
import CarImage from "@components/CarImage/CarImage";
// import Home from "@pages/Home/Home";

import "./App.scss";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<CarImage />} />
    </Routes>
  );
}

export default App;
