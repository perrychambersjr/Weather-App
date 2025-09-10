import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './components/Dashboard'
import { WeatherDataContextProvider } from './contexts/weatherData'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherDataContextProvider>
      <Dashboard />
    </WeatherDataContextProvider>
  </StrictMode>,
)
