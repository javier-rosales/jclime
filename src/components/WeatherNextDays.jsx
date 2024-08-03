import WeatherDay from "./WeatherDay"

export default function WeatherNextDays({weatherData}) {
  return (
    <div className="w-days">
      <h2 className="w-days__title">Next {weatherData.length} days</h2>
      <div className="w-days__list">
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