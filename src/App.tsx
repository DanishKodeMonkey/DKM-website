import { BrowserRouter, Route, Routes } from "react-router-dom";
import {lazy, Suspense} from 'react'
import Loading from "./components/Loading.tsx";
import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const Index = lazy(() =>import('./pages/Index.tsx'))
const CommentDetails = lazy(()=>import('./pages/CommentDetails.tsx'))

function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
        <main className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comments/:selectedComment" element={<CommentDetails />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
