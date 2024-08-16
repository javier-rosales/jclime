import { useState, useEffect } from 'react'
import WeatherContainer from './components/WeatherContainer'
import WeatherPrimary from './components/WeatherPrimary'
import WeatherSecondary from './components/WeatherSecondary'
import WeatherNextDays from './components/WeatherNextDays'
import WeatherHours from './components/WeatherHours'
import Loading from './components/Loading'
import weatherService from './services/weather'

function App() {
  const [location, setLocation] = useState("19.680691, -99.257362") // Test fixed location
  const [weatherData, setWeatherData] = useState(null)

  const {
    current,
    nextHours,
    tomorrow,
    nextDays
  } = weatherData || {}

  useEffect(() => {
    weatherService
      .getFilteredData(location)
      .then(retrievedData => {
        setWeatherData(retrievedData)
      })
  }, [location])

  return (
    <main>
      {weatherData
        ?
          <>
            <WeatherContainer>
              <WeatherPrimary
                day={current.day}
                time={current.time}
                weatherCondition={current.weatherCondition}
                weatherConditionImg={current.weatherConditionImg}
                temperature={current.temperature}
                windSpeed={current.windSpeed}
                humidity={current.humidity}
                precipitationProbability={current.precipitationProbability}
              />
              <WeatherHours
                title="Today"
                weatherData={nextHours}
              />
            </WeatherContainer>
            <WeatherContainer>
              <WeatherSecondary
                title="Tomorrow"
                temperatureMax={tomorrow.temperatureMax}
                temperatureMin={tomorrow.temperatureMin}
                weatherCondition={tomorrow.weatherCondition}
                weatherConditionImg={tomorrow.weatherConditionImg}
                windSpeed={tomorrow.windSpeed}
                humidity={tomorrow.humidity}
                precipitationProbability={tomorrow.precipitationProbability}
              />
            </WeatherContainer>
            <WeatherContainer>
              <WeatherNextDays
                weatherData={nextDays}
              />
            </WeatherContainer>
          </>
        :
          <Loading />
      }
    </main>
  )
}

export default App
