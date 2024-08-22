import WeatherAdditionalInfo from "./WeatherAdditionalInfo"

export default function WeatherPrimary({
  date,
  day,
  time,
  weatherCondition,
  weatherConditionImg,
  temperature,
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div className="w-pri">
      <div className="w-pri__main">
        <div className="w-pri__info-header">
          <p className="w-pri__date-text">
            {date}
          </p>
          <p className="w-pri__daytime">
          {`${day}, ${time}`}
          </p>
        </div>
        <div className="w-pri__img-cont">
          <div
            className="w-pri__img-bg"
            style={{
              backgroundImage: `url(${weatherConditionImg})`
            }}
          ></div>
          <img
            src={weatherConditionImg}
            className="w-pri__img"
          />
        </div>
        <p className="w-pri__temp">
          <span className="w-pri__temp-val">
            {temperature}
          </span>
          <span className="w-pri__temp-unit">
            &deg;C
          </span>
        </p>
        <p className="w-pri__cond">
          {weatherCondition}
        </p>
      </div>
      <WeatherAdditionalInfo
        windSpeed={windSpeed}
        humidity={humidity}
        precipitationProbability={precipitationProbability}
      />
    </div>
  )
}