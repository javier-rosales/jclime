export default function WeatherHour({
  temperature,
  weatherConditionImg,
  time
}) {
  return (
    <div className="w-hour">
      <p className="w-hour__temp">
        {temperature}
        &deg;
      </p>
      <img
        src={weatherConditionImg}
        className="w-hour__img"
      />
      <p className="w-hour__time">
        {time}
      </p>
    </div>
  )
}