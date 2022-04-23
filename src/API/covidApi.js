import axios from 'axios'

export const fetchCovidStats = async (country = 'all') => {
  try {
    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      params: { country, day: '2020-06-03' },
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      },
    }

    const res = await axios(options)
    const data = await res.data
    return data
  } catch (error) {}
}
