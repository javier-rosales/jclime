import WeatherDay from "./WeatherDay"

export default function WeatherNextDays({weatherData}) {
  return (
    <div className="w-days">
      <h3 className="w-days__title">
        Next {weatherData.length} days
      </h3>
      <div className="w-days__list">
        {weatherData.map((weather, index) =>
          <WeatherDay
            key={`${index} ${weather.day}`}
            day={weather.day}
            weatherCondition={weather.weatherCondition}
            weatherConditionImg={weather.weatherConditionImg}
            temperatureMax={weather.temperatureMax}
            temperatureMin={weather.temperatureMin}
          />
        )}
      </div>
    </div>
  )
}