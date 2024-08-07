import IconRain from "/rain.svg"
import IconDroplet from "/droplet.svg"
import IconWind from "/wind.svg"

export default function WeatherAdditionalInfo({
  windSpeed,
  humidity,
  precipitationProbability
}) {
  return (
    <div className="w-ext-info">
      <div className="w-ext-info__item">
        <img
          src={IconWind}
          className="w-ext-info__icon"
          alt="Wind icon"
        />
        <p className="w-ext-info__value">
          {`${windSpeed} m/s`}
        </p>
        <p className="w-ext-info__label">
          Wind
        </p>
      </div>
      <div className="w-ext-info__sep"></div>
      <div className="w-ext-info__item">
        <img
          src={IconDroplet}
          className="w-ext-info__icon"
          alt="Droplet icon"
        />
        <p className="w-ext-info__value">
          {`${humidity} %`}
        </p>
        <p className="w-ext-info__label">
          Humidity
        </p>
      </div>
      <div className="w-ext-info__sep"></div>
      <div className="w-ext-info__item">
        <img
          src={IconRain}
          className="w-ext-info__icon"
          alt="Rain icon"
        />
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