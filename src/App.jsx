import { useState, useEffect } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import AppLogo from './components/AppLogo'
import PlaceSearch from './components/PlaceSearch'
import WeatherContainer from './components/WeatherContainer'
import LocationDisplay from './components/LocationDisplay'
import WeatherPrimary from './components/WeatherPrimary'
import WeatherSecondary from './components/WeatherSecondary'
import WeatherNextDays from './components/WeatherNextDays'
import WeatherHours from './components/WeatherHours'
import Loading from './components/Loading'
import GitHubProfile from './components/GitHubProfile'
import weatherService from './services/weather'

function App() {
  const [location, setLocation] = useLocalStorage(
    "location",
    "19.680691, -99.257362"
  ) // Test fixed location
  const [locationName, setLocationName] = useLocalStorage(
    "locationName",
    "El Rosario, Cuautitlan Izcalli"
  )
  const [weatherData, setWeatherData] = useState(null)

  const {
    current,
    nextHours,
    tomorrow,
    nextDays
  } = weatherData || {}

  useEffect(() => {
    setWeatherData(null)
    
    weatherService
      .getFilteredData(location)
      .then(retrievedData => {
        setWeatherData(retrievedData)
      })
  }, [location])

  return (
    <>
      <header>
        <AppLogo />
        <PlaceSearch
          updateLocation={setLocation}
          updateLocationName={setLocationName}
        />
      </header>
      <main>
        {weatherData
          ?
            <>
              <LocationDisplay
                title={locationName}
              />
              <WeatherContainer>
                <WeatherPrimary
                  date={current.date}
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
                  title="Next hours"
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
      <footer>
        <GitHubProfile
          username="javier-rosales"
          profileLink="https://github.com/javier-rosales"
        />
      </footer>
    </>
  )
}

export default App
