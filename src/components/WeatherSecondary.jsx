import WeatherAdditionalInfo from "./WeatherAdditionalInfo"

export default function Secondary({
  title,
  maxTemperature,
  minTemperature,
  weatherCondition,
  weatherConditionImg,
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div className="w-sec">
      <div className="w-sec__main">
        <h2 className="w-sec__title">
          {title}
        </h2>
        <div className="w-sec__img-cont">
          <div className="w-sec__img-bg"></div>
          <img
            src={weatherConditionImg}
            className="w-sec__img"
          />
        </div>
        <p className="w-sec__temp">
          <span className="w-sec__temp-max">
            {maxTemperature}
            &deg;
          </span>
          <span className="w-sec__temp-min">
            {minTemperature}
            &deg;
          </span>
        </p>
        <p className="w-sec__cond">
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