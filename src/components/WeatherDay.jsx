export default function WeatherDay({
  day,
  weatherCondition,
  weatherConditionImg,
  maxTemperature,
  minTemperature
}) {
  return (
    <div className="w-day">
      <p className="w-day__day">
        {day}
      </p>
      <img
        src={weatherConditionImg}
        className="w-day__img"
      />
      <p className="w-day__cond">
        {weatherCondition}
      </p>
      <p className="w-day__temp">
        <span className="w-day__temp-max">
          {maxTemperature}
          &deg;
        </span>
        <span className="w-day__temp-min">
          {minTemperature}
          &deg;
        </span>
      </p>
    </div>
  )
}