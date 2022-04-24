const endpoints = {
  auth: {
    login: 'auth/login/',
    register: 'auth/register/',
    verifyEmail: 'auth/verify-email/',

    // verify: `${baseURL}/auth/verify/login/`,
    // logout: `${baseURL}/auth/logout/`,
    // myself: `${baseURL}/auth/myself/`,
  },
  profile: {
    myself: 'profile/myself',
  },
  article: {
    index: 'article/',
    my: 'article/my/',
  },
}

export default endpoints
