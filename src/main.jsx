import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EmailProvider } from "@/components/OTP";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmailProvider>
    <App />
    </EmailProvider>
  </React.StrictMode>,
)
