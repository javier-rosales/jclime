import { useState, useEffect } from 'react'
import weatherService from './services/weather'

function App() {
  const [location, setLocation] = useState("19.680691, -99.257362") // Test fixed location
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    weatherService
      .getFilteredData(location)
      .then(retrievedData => {
        setWeatherData(retrievedData)
      })
  }, [location])

  console.log(weatherData)

  return (
    <div>
      Coming soon...
    </div>
  )
}

export default App
