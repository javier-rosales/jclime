import WeatherAdditionalInfo from "./WeatherAdditionalInfo"

export default function Secondary({
  title,
  maxTemperature,
  minTemperature,
  weatherCondition,
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div>
      <div>
        <h2>
          {title}
        </h2>
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
        <p>
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