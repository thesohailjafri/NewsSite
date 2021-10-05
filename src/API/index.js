import axios from 'axios'


const fetchNews = async (search = 'india', pageNumber, pageSize = 20) => {
    try {

        var options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: {
                q: search,
                lang: 'en',
                page: pageNumber,
                page_size: pageSize
            },
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }
        }

        const res = await axios(options)
        const data = await res.data
        return (data)
    } catch (error) {
        console.error(error)
    }
}

const fetchWeather = async (lat = 1, lon = 1, excludeTerms = ['minutely', 'hourly', 'daily', 'alerts']) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/onecall',
            params: {
                lat: lat,
                lon: lon,
                exclude: excludeTerms.toString(),
                appid: process.env.REACT_APP_OPENWEATHER_KEY,
            }
        }
        const res = await axios(options)
        const data = await res.data
        return (data)
    } catch (error) {
        console.error(error)
    }
}

const fetchCovidStats = async (country = 'all') => {
    try {
        var options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/history',
            params: { country, day: '2020-06-03' },
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }
        }

        const res = await axios(options)
        const data = await res.data
        return (data)
    } catch (error) {

    }
}



export {
    fetchNews,
    fetchWeather,
    fetchCovidStats
}