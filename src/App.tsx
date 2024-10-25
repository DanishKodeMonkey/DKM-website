import { BrowserRouter, useRoutes} from "react-router-dom";
import {Suspense} from 'react'
import Loading from "./components/Loading.tsx";
import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";


/* import route config */
import {routes} from './routes/AppRoutes.tsx'

function AppRoutes(){
  return useRoutes(routes)
}

function App() {

  return (
    <Suspense fallback={<Loading />}>
    <div className="App">

      <BrowserRouter>
        <Header />
        <main className="container">
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>

    </div>
    </Suspense>
  );
}

export default App;
