import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import CommentDetails from "./pages/CommentDetails.tsx";
import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:selectedComment" element={<CommentDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
