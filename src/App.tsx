import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import BusinessCardPage from "./pages/businessCard.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusinessCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
