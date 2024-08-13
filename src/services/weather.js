import axios from 'axios'
import weatherCodes from '../assets/weatherCodes'

const API_KEY = "YV1jWoBLDdQl7TPjOOvA6RHpmaXlzgUN"
const baseUrl = `https://api.tomorrow.io/v4/timelines?apikey=${API_KEY}`

// Information to retrieve from API
const fields = [
    "temperature",
    "temperatureMax",
    "temperatureMin",
    "humidity",
    "windSpeed",
    "precipitationProbability",
    "weatherCodeFullDay",
    "weatherCode"
]
const units = "metric"
const timesteps = ["current", "1h", "1d"]
const startTime = "now"
const endTime = "nowPlus5d"

// Image paths (Object)
let weatherIconsSm = import.meta.glob(
    "/public/weather-icons/small/*.png",
    { eager: true }
)
let weatherIconsLg = import.meta.glob(
    "/public/weather-icons/large/*.png",
    { eager: true }
)
let weatherIconsXl = import.meta.glob(
    "/public/weather-icons/extra-large/*.png",
    { eager: true }
)

// Image paths (Array)
weatherIconsSm = Object.keys(weatherIconsSm)
weatherIconsLg = Object.keys(weatherIconsLg)
weatherIconsXl = Object.keys(weatherIconsXl)

async function getData(location) {
    const response = await axios.post(baseUrl, {
        location,
        fields,
        units,
        timesteps,
        startTime,
        endTime
    })

    return response.data
}

async function getFilteredData(location) {
    const data = await getData(location)

    const currentData = findDataByTimestep("current", data)[0]
    const current = {
        day: getDayName(currentData.startTime),
        time: get12HourTime(currentData.startTime),
        weatherCondition: getWeatherCondition(currentData.values.weatherCode),
        weatherConditionImg: getImg(currentData.values.weatherCode, weatherIconsXl),
        temperature: round(currentData.values.temperature),
        windSpeed: round(currentData.values.windSpeed),
        humidity: round(currentData.values.humidity),
        precipitationProbability: round(currentData.values.precipitationProbability)
    }

    const nextHours = findDataByTimestep("1h", data).slice(1, 5)
        .map(nextHourData => ({
            temperature: round(nextHourData.values.temperature),
            weatherConditionImg: getImg(nextHourData.values.weatherCode, weatherIconsSm),
            time: get12HourTime(nextHourData.startTime)
        }))

    const tomorrowData = findDataByTimestep("1d", data)[1]
    const tomorrow = {
        temperatureMax: round(tomorrowData.values.temperatureMax),
        temperatureMin: round(tomorrowData.values.temperatureMin),
        weatherCondition: getWeatherCondition(tomorrowData.values.weatherCodeFullDay),
        weatherConditionImg: getImg(tomorrowData.values.weatherCodeFullDay, weatherIconsLg),
        windSpeed: round(tomorrowData.values.windSpeed),
        humidity: round(tomorrowData.values.humidity),
        precipitationProbability: round(tomorrowData.values.precipitationProbability)
    }

    const nextDays = findDataByTimestep("1d", data).slice(2, 6)
        .map(nextDayData => ({
            day: getDayShortName(nextDayData.startTime),
            weatherCondition: getWeatherCondition(nextDayData.values.weatherCodeFullDay),
            weatherConditionImg: getImg(nextDayData.values.weatherCodeFullDay, weatherIconsSm),
            temperatureMax: round(nextDayData.values.temperatureMax),
            temperatureMin: round(nextDayData.values.temperatureMin)
        }))

    return {
        current,
        nextHours,
        tomorrow,
        nextDays
    }
}

function findDataByTimestep(timestep, data) {
    return data.data.timelines.find(
        timeline => timeline.timestep === timestep
    ).intervals
}

function getWeatherCondition(weatherCode) {
    return weatherCodes[weatherCode]
}

function getImg(weatherCode, images) {
    const regex = new RegExp(`/${weatherCode}0_.*\\.png$`)
    for (const path of images) {
        if (regex.test(path)) {
            return path.replace("/public", "")
        }
    }
}

function getDayName(isoDateTime) {
    const date = new Date(isoDateTime)
    const dayName = date.toLocaleDateString("en-US", {
        weekday: "long"
    })

    return dayName
}

function getDayShortName(isoDateTime) {
    const date = new Date(isoDateTime)
    const dayShortName = date.toLocaleDateString("en-US", {
        weekday: "short"
    })

    return dayShortName
}

function get12HourTime(isoDateTime) {
    const date = new Date(isoDateTime)
    const time = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true
    })

    return time
}

function round(value) {
    return Math.round(value)
}

export default { getFilteredData }