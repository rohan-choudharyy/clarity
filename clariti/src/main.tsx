import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// detect react-snap
const isSnap = navigator.userAgent === "reactSnap";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={isSnap ? "" : undefined}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
