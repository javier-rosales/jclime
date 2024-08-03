export default function WeatherHour({
  temperature,
  time
}) {
  return (
    <div className="w-hour">
      <p className="w-hour__temp">
        {temperature}
        &deg;
      </p>
      <p className="w-hour__time">
        {time}
      </p>
    </div>
  )
}