import React, { createContext, useReducer, useContext, useState, useCallback, useEffect } from 'react'
import { fetchTrendingNews, fetchWeather } from './API'
import reducer from './reducer'

export const contextValue = createContext()

export const ContextProvider = ({ children }) => {
    let initialState = {
        latitude: 19.0760,
        longitude: 72.8777,
        user: null,
        country: 'in',
        currentWeather: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [loading, setLoading] = useState(true)


    const getGeoLocation = useCallback(() => {
        let pos = {
            latitude: 19.0760,
            longitude: 72.8777,
        }
        function success(pos) {
            var crd = pos.coords
            pos.latitude = crd.latitude
            pos.longitude = crd.longitude
            dispatch({
                type: 'SET_GEO_LOCATION',
                pos: pos

            })
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`)
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        }

        return pos
    }, [])

    const getWeather = useCallback(async (excludeTerms = ['minutely', 'daily', 'alerts']) => {
        const weatherD = await fetchWeather(state.latitude, state.longitude, excludeTerms)
        if (weatherD) {
            dispatch({
                type: 'SET_WEATHER',
                currentWeather: weatherD.current,
                hourlyWeather: weatherD.hourly,
            })
        }
    }, [state.latitude, state.longitude])

    const getTrendingNews = useCallback(async () => {
        const res = await fetchTrendingNews()
        if (res) {
            dispatch({
                type: 'SET_TRENDING_NEWS',
                trendingNews: res.value
            })
        }
    }, [])


    useEffect(() => {
        getGeoLocation()
    }, [getGeoLocation])

    useEffect(() => {
        getWeather()
    }, [getWeather])

    useEffect(() => {
        getTrendingNews()
    }, [getTrendingNews])

    useEffect(() => {
        console.info(state)
    }, [state])



    return (<contextValue.Provider
        value={{
            ...state,
            dispatch,
            loading,
            setLoading
        }}>
        {children}
    </contextValue.Provider>
    )
}

export const useAppContext = () => {
    return useContext(contextValue)
}