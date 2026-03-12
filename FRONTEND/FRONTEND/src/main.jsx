import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VisitorProvider } from "./context/VisitorContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisitorProvider>
      <App />
    </VisitorProvider>
  </React.StrictMode>
);