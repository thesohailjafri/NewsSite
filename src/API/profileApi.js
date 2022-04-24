import axios from 'axios'
import endpoints from './endpoints'

export const myselfApi = async (email, username, password) => {
  try {
    const res = await axios.get(endpoints.profile.myself)
    return res
  } catch (error) {
    return error.response
  }
}
