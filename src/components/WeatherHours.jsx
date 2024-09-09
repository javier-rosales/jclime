import { useState } from "react"
import WeatherHour from "./WeatherHour"

export default function WeatherHours({
  title,
  weatherData,
  onWeatherHourSelect
}) {
  const [hourSelected, setHourSelected] = useState(weatherData[0].time)

  function handleSelect(weatherData) {
    onWeatherHourSelect(weatherData)
    setHourSelected(weatherData.time)
  }

  return (
    <div className="w-hours">
      <h3 className="w-hours__title">
        {title}
      </h3>
      <div className="w-hours__list">
        {weatherData.map(weather =>
          <WeatherHour
            key={weather.time}
            weatherData={weather}
            onSelect={() => handleSelect(weather)}
            isSelected={weather.time === hourSelected}
          />
        )}
      </div>
    </div>
  )
}