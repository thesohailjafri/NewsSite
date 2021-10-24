export default function reducer(state, payload) {
    switch (payload.type) {

        case 'SET_SEARCH_FALSE':
            return {
                ...state,
                isSearch: false,
            }
        case 'SET_SEARCH':
            return {
                ...state,
                isSearch: true,
                searchNews: payload.fromSearchNews
            }
        case 'SET_COUNTRY':
            return {
                ...state,
                country: payload.country
            }
        case 'SET_SPORTS_HIGHLIGHTS_NEWS':
            return {
                ...state,
                sportHighlights: payload.sportHighlights
            }
        case 'SET_TRENDING_NEWS':
            return {
                ...state,
                trendingNews: payload.trendingNews
            }
        case 'SET_MUMBAI_NEWS':
            return {
                ...state,
                mumbaiNews: payload.mumbaiNews
            }
        case 'SET_DELHI_NEWS':
            return {
                ...state,
                delhiNews: payload.delhiNews
            }

        case 'SET_COVID_NEWS':
            return {
                ...state,
                covidNews: payload.covidNews
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