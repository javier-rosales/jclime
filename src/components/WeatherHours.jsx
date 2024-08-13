import WeatherHour from "./WeatherHour"

export default function WeatherHours({
  title,
  weatherData
}) {
  return (
    <div className="w-hours">
      <h2 className="w-hours__title">
        {title}
      </h2>
      <div className="w-hours__list">
        {weatherData.map(weather =>
          <WeatherHour
            key={weather.time}
            temperature={weather.temperature}
            weatherConditionImg={weather.weatherConditionImg}
            time={weather.time}
          />
        )}
      </div>
    </div>
  )
}