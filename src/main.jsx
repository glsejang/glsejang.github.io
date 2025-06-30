if (typeof window !== 'undefined' && !window.GestureEvent) {
  window.GestureEvent = class GestureEvent extends Event {
    constructor(type, props) {
      super(type, props);
    }
  }
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
