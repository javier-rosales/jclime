import axios from 'axios'

const autocompleteUrl = "https://places.googleapis.com/v1/places:autocomplete"
const placeDetailsUrl = "https://places.googleapis.com/v1/places"

async function getSuggestions (input, sessionToken) {
    const response = await axios.post(autocompleteUrl, {
        input,
        includedPrimaryTypes: [
            "locality",
            "administrative_area_level_1",
            "administrative_area_level_2",
            "sublocality_level_1",
            "sublocality_level_2"
        ]
    }, {
        params: {
            key: "AIzaSyDpY8e5w8RPmr5F3zZLu6GfZDTQZvOzVig",
            sessionToken
        }
    })

    return response.data
}

async function getPlaceLocation (id, sessionToken) {
    const placeLocationUrl = `${placeDetailsUrl}/${id}`
    const response = await axios.get(placeLocationUrl, {
        params: {
            key: "AIzaSyDpY8e5w8RPmr5F3zZLu6GfZDTQZvOzVig",
            fields: "location",
            sessionToken
        }
    })
    
    return response.data.location
}

export default { getSuggestions, getPlaceLocation }