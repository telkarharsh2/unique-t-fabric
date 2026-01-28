import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n'; // Import i18n configuration
import './styles/global.css' // Import Global Styles
import './styles/scroll-animations.css' // Keep for custom hooks/styles if needed, or remove later
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Bootstrap JS
import 'aos/dist/aos.css'; // AOS Styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)