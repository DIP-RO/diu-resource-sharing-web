import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </UserContext>
)
