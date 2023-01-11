import LoginForm from "@components/Loginform/LoginForm";
import Home from "@pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginform" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
