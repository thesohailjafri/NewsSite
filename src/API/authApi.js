import axios from 'axios'
import endpoints from './endpoints'

export const registerApi = async (email, username, password) => {
  // register
  try {
    const res = await axios.post(endpoints.auth.register, {
      email,
      username,
      password,
    })
    return res
  } catch (error) {
    return error.response
  }
}

export const verifyEmailApi = async (verificationToken, email) => {
  // verify email
  try {
    const res = await axios.post(endpoints.auth.verifyEmail, {
      verificationToken,
      email,
    })
    return res
  } catch (error) {
    return error.response
  }
}

export const loginApi = async (email, password) => {
  // verify email
  try {
    const res = await axios.post(endpoints.auth.login, {
      email,
      password,
    })
    return res
  } catch (error) {
    return error.response
  }
}
