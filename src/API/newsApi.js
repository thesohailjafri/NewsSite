import axios from 'axios'

export const fetchNews = async (
  search = 'india',
  pageNumber,
  pageSize = 20,
) => {
  try {
    var options = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {
        q: search,
        lang: 'en',
        page: pageNumber,
        page_size: pageSize,
      },
      headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      },
    }

    const res = await axios(options)
    const data = await res.data
    return data
  } catch (error) {
    console.error(error)
  }
}
