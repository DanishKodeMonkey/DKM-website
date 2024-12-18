import { HashRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading.tsx";
import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

/* import route config */
import { routes } from "./routes/AppRoutes.tsx";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="container">
            <AppRoutes />
          </main>
        </Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
