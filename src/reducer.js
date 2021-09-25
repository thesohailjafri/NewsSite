export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_GEO_LOCATION':
            return {
                ...state,
                latitude: action.pos.latitude,
                longitude: action.pos.longitude
            }
        case 'SET_WEATHER':
            return {
                ...state,
                currentWeather: action.currentWeather,
                hourlyWeather: action.hourlyWeather,
            }
        case 'SET_TRENDING_NEWS':
            return {
                ...state,
                trendingNews: action.trendingNews
            }
        default:
            break
    }
}