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
import Welcome from './components/Welcome'
import Loading from './components/Loading'
import GitHubProfile from './components/GitHubProfile'
import weatherService from './services/weather'
import LogoTomorrowApi from '/powered-by-tomorrow.svg'

function App() {
  const [location, setLocation] = useLocalStorage(
    "location",
    null
  )
  const [locationName, setLocationName] = useLocalStorage(
    "locationName",
    null
  )
  const [weatherData, setWeatherData] = useState(null)
  const [currentWeatherData, setCurrentWeatherData] = useState(null)

  const {
    nextHours,
    tomorrow,
    nextDays
  } = weatherData || {}

  useEffect(() => {
    if (location) {
      setWeatherData(null)
    
      weatherService
        .getFilteredData(location)
        .then(retrievedData => {
          setWeatherData(retrievedData)
          setCurrentWeatherData(retrievedData.nextHours[0])
        })
    }
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
        {
          !location ? (
            <Welcome />
          ) : weatherData ? (
            <>
              <LocationDisplay
                title={locationName}
              />
              <WeatherContainer>
                <WeatherPrimary
                  weatherData={currentWeatherData}
                />
                <WeatherHours
                  title="Next hours"
                  weatherData={nextHours}
                  onWeatherHourSelect={setCurrentWeatherData}
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
          ) : (
            <Loading />
          )
        }
      </main>
      <footer>
        <GitHubProfile
          username="javier-rosales"
          profileLink="https://github.com/javier-rosales"
        />
        <img
          src={LogoTomorrowApi}
          className="attr"
          alt="Tomorrow io attribution"
        />
      </footer>
    </>
  )
}

export default App
