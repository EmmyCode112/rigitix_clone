import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmailProvider } from "@/components/OTP";
import { EventProvider } from "@/context/EventContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmailProvider>
      <EventProvider>
        <App />
      </EventProvider>
    </EmailProvider>
  </React.StrictMode>
);
