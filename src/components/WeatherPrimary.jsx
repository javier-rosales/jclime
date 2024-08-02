import WeatherAdditionalInfo from "./WeatherAdditionalInfo"

export default function WeatherPrimary({
  day,
  time,
  weatherCondition,
  temperature,
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div>
      <div>
        <p>
          {`${day}, ${time}`}
        </p>
        <p>
          <span>
            {temperature}
          </span>
          <span>
            &deg;C
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