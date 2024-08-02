export default function WeatherHour({
  temperature,
  time
}) {
  return (
    <div>
      <p>
        {temperature}
        &deg;
      </p>
      <p>
        {time}
      </p>
    </div>
  )
}