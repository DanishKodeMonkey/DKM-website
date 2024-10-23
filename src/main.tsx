import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoadingProvider } from "./contexts/LoadingContext.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
