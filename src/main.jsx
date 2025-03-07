import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SettingsProvider } from "./Settings.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <App />
  </SettingsProvider>
);
