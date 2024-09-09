export default function WeatherHour({
  weatherData,
  onSelect,
  isSelected
}) {
  return (
    <div className={`w-hour ${isSelected && "selected"}`}
      onClick={onSelect}
    >
      <p className="w-hour__temp">
        {weatherData.temperature}
        &deg;
      </p>
      <img
        src={weatherData.weatherConditionImg}
        className="w-hour__img"
      />
      <p className="w-hour__time">
        {weatherData.time}
      </p>
    </div>
  )
}