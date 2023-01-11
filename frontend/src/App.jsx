import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Form from "@pages/Form/Form";

function App() {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
