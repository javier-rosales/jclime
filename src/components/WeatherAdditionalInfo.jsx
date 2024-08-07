export default function WeatherAdditionalInfo({
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div className="w-ext-info">
      <div className="w-ext-info__item">
        <p className="w-ext-info__value">
          {`${windSpeed} m/s`}
        </p>
        <p className="w-ext-info__label">
          Wind
        </p>
      </div>
      <div className="w-ext-info__sep"></div>
      <div className="w-ext-info__item">
        <p className="w-ext-info__value">
          {`${humidity} %`}
        </p>
        <p className="w-ext-info__label">
          Humidity
        </p>
      </div>
      <div className="w-ext-info__sep"></div>
      <div className="w-ext-info__item">
        <p className="w-ext-info__value">
          {`${precipitationProbability} %`}
        </p>
        <p className="w-ext-info__label">
          Rain
        </p>
      </div>
    </div>
  )
}