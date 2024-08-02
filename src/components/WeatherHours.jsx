import WeatherHour from "./WeatherHour"

export default function WeatherHours({
  title,
  weatherData
}) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <div>
        {weatherData.map(weather =>
          <WeatherHour
            key={weather.time}
            temperature={weather.temperature}
            time={weather.time}
          />
        )}
      </div>
    </div>
  )
}