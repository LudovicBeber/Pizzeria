import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export const apiService = new ApiService(import.meta.env.VITE_API_BASE_URL, localStorage.getItem('accessToken') || '');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
