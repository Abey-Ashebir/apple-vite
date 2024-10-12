import { StrictMode } from "react";
import "./css/styles.css";
import { createRoot } from "react-dom/client";
// import Header from "./components/header/Header.css";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    <App />
  </StrictMode>
);
