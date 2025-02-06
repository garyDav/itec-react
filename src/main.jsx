import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
);
