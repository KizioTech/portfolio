import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

<BrowserRouter basename="/portfolio">
  <App />
</BrowserRouter>
createRoot(document.getElementById("root")!).render(<App />);
