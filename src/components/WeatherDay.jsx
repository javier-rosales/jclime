export default function WeatherDay({
  day,
  weatherCondition,
  maxTemperature,
  minTemperature
}) {
  return (
    <div>
      <p>
        {day}
      </p>
      <p>
        {weatherCondition}
      </p>
      <p>
        <span>
          {maxTemperature}
          &deg;
        </span>
        <span>
          {minTemperature}
          &deg;
        </span>
      </p>
    </div>
  )
}