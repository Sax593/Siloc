import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import SingleCarScreen from "@pages/SingleCarScreen/SingleCarScreen";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<SingleCarScreen />} />
    </Routes>
  );
}

export default App;
