import { atom } from 'recoil'

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    username: '',
    email: '',
    userId: '',
  },
})
