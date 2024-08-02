import WeatherDay from "./WeatherDay"

export default function WeatherNextDays({weatherData}) {
  return (
    <div>
      <h2>Next {weatherData.length} days</h2>
      <div>
        {weatherData.map((weather, index) =>
          <WeatherDay
            key={`${index} ${weather.day}`}
            day={weather.day}
            weatherCondition={weather.weatherCondition}
            maxTemperature={weather.maxTemperature}
            minTemperature={weather.minTemperature}
          />
        )}
      </div>
    </div>
  )
}