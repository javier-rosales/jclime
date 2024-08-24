import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash/debounce'
import {v4 as uuidv4} from 'uuid'
import placesService from '../services/places'

export default function PlaceSearch() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [sessionToken, setSessionToken] = useState("")
  const [isNewSession, setIsNewSession] = useState(true)

  useEffect(() => {
    if(isNewSession) {
      const newToken = uuidv4()
      setSessionToken(newToken)
      setIsNewSession(false)
    }
  }, [isNewSession])

  async function handleSearch(input) {
    setQuery(input)
    debouncedGetSuggestions(input)
  }

  const debouncedGetSuggestions = useCallback(
    debounce(async input => {
      if (input.length === 0) {
        setSuggestions([])
      } else {
        const result = await placesService.getSuggestions(input, sessionToken)
        setSuggestions(result.suggestions || [])
      }
    }, 300),
    []
  )

  async function handleSelect(placeId) {
    const placeLocation = await placesService.getPlaceLocation(
      placeId,
      sessionToken
    )
    setIsNewSession(true)
    console.log(placeLocation)

    // TODO: Update location state in App.jsx to update weather details
  }

  return (
    <div className="plc-srch">
      <input
        type="text"
        value={query}
        onChange={e => handleSearch(e.target.value)}
        placeholder="Search place"
        className="plc-srch__input"
      />
      <ul className="plc-srch__list">
        {suggestions.map(suggestion => {
          const suggestionId = suggestion.placePrediction.placeId
          const suggestionName = suggestion.placePrediction.text.text

          return (
            <li
              className="plc-srch__item"
              key={suggestionId}
              onClick={() => handleSelect(suggestionId)}
            >
              {suggestionName}
          </li>
          )
        })
        }
      </ul>
    </div>
  )
}