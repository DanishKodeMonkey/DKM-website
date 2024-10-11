import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import BusinessCardPage from "./pages/businessCard.tsx";

function App() {
  console.log("APP component rendered");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BusinessCardPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
