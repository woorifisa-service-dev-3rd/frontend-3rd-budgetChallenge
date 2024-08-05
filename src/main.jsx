import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChallengeProvider } from "./contexts/ChallengeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChallengeProvider>
    <App />
  </ChallengeProvider>
);
