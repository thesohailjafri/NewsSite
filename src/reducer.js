export default function reducer(state, payload) {
    switch (payload.type) {

        case 'SET_COUNTRY':
            return {
                ...state,
                country: payload.country
            }

        case 'SET_TRENDING_NEWS':
            return {
                ...state,
                trendingNews: payload.trendingNews
            }
        case 'SET_COVID_STATS':
            return {
                ...state,
                covidStats: payload.covidStats
            }
        case 'SET_GLOBAL_COVID_STATS':
            return {
                ...state,
                globalCovidStats: payload.globalCovidStats
            }
        default:
            break
    }
}