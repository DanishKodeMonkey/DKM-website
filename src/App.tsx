import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import BusinessCardPage from "./pages/businessCard.tsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BusinessCardPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
