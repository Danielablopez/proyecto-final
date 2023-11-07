import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './componentes/App.css'
import { AppProvider } from "./componentes/AppContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
