import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>CustomApp!</h2>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <MyApp />
    
    
  </React.StrictMode>,
)
