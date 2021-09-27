import axios from 'axios'
const fetchTrendingNews = async (country = 'in') => {
    try {
        const options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
            params: { pageNumber: '1', pageSize: '10', withThumbnails: 'false', location: country },
            headers: {
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
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

const checkSingleSearchWord = async (payload) => {
    try {
        var options = {
            method: 'POST',
            url: 'https://bing-spell-check2.p.rapidapi.com/spellcheck',
            params: { mode: 'spell' },
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'bing-spell-check2.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            },
            data: { Text: payload }
        }

        const res = await axios(options)
        const data = await res.data
        return (data)
    } catch (error) {
        console.error(error)
    }
}

const fetchNews = async (term = 'breaking news', pageNumber = 1) => {
    try {
        var options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
            params: {
                q: term,
                pageNumber: pageNumber,
                pageSize: '10',
                autoCorrect: 'true',
                fromPublishedDate: 'null',
                toPublishedDate: 'null'
            },
            headers: {
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
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

const fetchCovidStats = async () => {
    try {
        var options = {
            method: 'GET',
            url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
            headers: {
                'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }
        }

        const res = await axios(options)
        console.log('lemon1')
        const data = await res.data


        return (data)
    } catch (error) {

    }
}


export {
    fetchTrendingNews,
    checkSingleSearchWord,
    fetchNews,
    fetchWeather,
    fetchCovidStats
}