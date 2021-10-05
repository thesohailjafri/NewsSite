import React, { createContext, useReducer, useContext, useState, useCallback, useEffect } from 'react'
import {
    fetchCovidStats,
    fetchNews,
} from './API'
import reducer from './reducer'

export const contextValue = createContext()

export const ContextProvider = ({ children }) => {
    let initialState = {
        user: null,
        currentWeather: null,
        trendingNews: null,
        mumbaiNews: null,
        delhiNews: null,
        covidNews: null,
        covidStats: null,
        globalCovidStats: null,
        totalPages: 0,
        pageSize: 20,
        pageNumber: 1
    }
    const homeNewsSize = 8

    const [state, dispatch] = useReducer(reducer, initialState)

    const [loading, setLoading] = useState(false)

    const searchNews = useCallback(
        async (q, p) => {
            const res = await fetchNews(q, p)

            return (res)

        }, [])


    const getTrendingNews = useCallback(async () => {
        setLoading(true)
        const res = await fetchNews('india trending', 1, homeNewsSize)
        if (res) {
            dispatch({
                type: 'SET_TRENDING_NEWS',
                trendingNews: res.articles
            })


            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
    }, [])

    const getMumbaiNews = useCallback(async () => {
        const res = await fetchNews('mumbai', 1, homeNewsSize)
        if (res) {
            dispatch({
                type: 'SET_MUMBAI_NEWS',
                mumbaiNews: res.articles
            })
        }
    }, [])

    const getDelhiNews = useCallback(async () => {
        const res = await fetchNews('delhi', 1, homeNewsSize)
        if (res) {
            dispatch({
                type: 'SET_DELHI_NEWS',
                delhiNews: res.articles
            })
        }
    }, [])

    const getCovidNews = useCallback(async () => {
        const res = await fetchNews('covid', 1, homeNewsSize)
        if (res) {
            dispatch({
                type: 'SET_COVID_NEWS',
                covidNews: res.articles
            })
        }
    }, [])


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


        const res = await fetchCovidStats('india')

        if (res) {
            dispatch({
                type: 'SET_COVID_STATS',
                covidStats: res.response[0]
            })
        }

    }, [])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const getHomePageData = async () => {
        setLoading(true)
        console.time('sleep1')
        await getCovidStat()
        await getGlobalCovidStat()
        await getTrendingNews()
        await sleep(1100)
        await getMumbaiNews()
        await sleep(1100)
        await getDelhiNews()
        await sleep(1100)
        await getCovidNews().then(() => setLoading(false))
        console.timeEnd('sleep1')
    }


    useEffect(() => {
        console.info(state)
    }, [state])



    return (<contextValue.Provider
        value={{
            ...state,
            dispatch,
            loading,
            setLoading,
            searchNews,
            getHomePageData
        }}>
        {children}
    </contextValue.Provider>
    )
}

export const useAppContext = () => {
    return useContext(contextValue)
}