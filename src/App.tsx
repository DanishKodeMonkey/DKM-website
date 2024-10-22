import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import CommentDetails from "./pages/CommentDetails.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:selectedComment" element={<CommentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
