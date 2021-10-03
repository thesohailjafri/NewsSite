import React, { createContext, useReducer, useContext, useState, useCallback, useEffect } from 'react'
import {
    fetchCovidStats,
    fetchTrendingNews,
} from './API'
import reducer from './reducer'

export const contextValue = createContext()

export const ContextProvider = ({ children }) => {
    let initialState = {
        user: null,
        country: 'in',
        currentWeather: null,
        trendingNews: null,
        covidStats: null,
        globalCovidStats: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [loading, setLoading] = useState(true)

    const changeCountry = (which) => {
        console.log(which)
        dispatch({
            type: 'SET_COUNTRY',
            country: which
        })
    }

    const getTrendingNews = useCallback(async () => {
        setLoading(true)
        const res = await fetchTrendingNews(state.country)
        if (res) {
            dispatch({
                type: 'SET_TRENDING_NEWS',
                trendingNews: res.value
            })

            setTimeout(() => {
                setLoading(false)
            }, 500)

        }
    }, [state.country])

    const getGlobalCovidStat = useCallback(async () => {
        const res = await fetchCovidStats()

        if (res) {
            dispatch({
                type: 'SET_GLOBAL_COVID_STATS',
                globalCovidStats: res.response[0]
            })
        }
    }, [])

    const getCovidStat = useCallback(async () => {
        let countryName

        if (state.country === 'in') {
            countryName = 'india'
        }
        else if (state.country === 'us') {
            countryName = 'usa'
        }
        else if (state.country === 'uk') {
            countryName = 'uk'
        } else {
            countryName = 'all'
        }

        const res = await fetchCovidStats(countryName)

        if (res) {
            dispatch({
                type: 'SET_COVID_STATS',
                covidStats: res.response[0]
            })
        }

    }, [state.country])




    useEffect(() => {
        getTrendingNews()
    }, [getTrendingNews])

    useEffect(() => {
        getCovidStat()
    }, [getCovidStat])

    useEffect(() => {
        getGlobalCovidStat()
    }, [getGlobalCovidStat])


    useEffect(() => {
        console.info(state)
    }, [state])



    return (<contextValue.Provider
        value={{
            ...state,
            dispatch,
            loading,
            setLoading,
            changeCountry
        }}>
        {children}
    </contextValue.Provider>
    )
}

export const useAppContext = () => {
    return useContext(contextValue)
}