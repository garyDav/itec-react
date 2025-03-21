import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HooksApp } from "./App.jsx";

// import "./01-hook-app/05-useReducer/intro-reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
);
