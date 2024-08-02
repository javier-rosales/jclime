import WeatherAdditionalInfo from "./WeatherAdditionalInfo"

export default function Secondary({
  maxTemperature,
  minTemperature,
  weatherCondition,
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div>
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
      <WeatherAdditionalInfo
        windSpeed={windSpeed}
        humidity={humidity}
        precipitationProbability={precipitationProbability}
      />
    </div>
  )
}