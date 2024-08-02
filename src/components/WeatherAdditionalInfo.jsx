export default function WeatherAdditionalInfo({
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div>
      <div>
        <p>
          {`${windSpeed} m/s`}
        </p>
        <p>
          Wind
        </p>
      </div>
      <div>
        <p>
          {`${humidity} %`}
        </p>
        <p>
          Humidity
        </p>
      </div>
      <div>
        <p>
          {`${precipitationProbability} %`}
        </p>
        <p>
          Rain
        </p>
      </div>
    </div>
  )
}