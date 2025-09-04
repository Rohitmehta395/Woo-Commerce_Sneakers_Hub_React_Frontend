import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log("main.jsx is loading..."); // Debug log

const root = createRoot(document.getElementById("root"));
console.log("Root element found:", document.getElementById("root")); // Debug log

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
