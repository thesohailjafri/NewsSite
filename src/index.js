import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context'
import { ToastContainer } from 'react-toastify'
/* Import Styling*/
import './style/index.scss'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { RecoilRoot } from 'recoil'

axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token')
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ContextProvider>
          <ToastContainer />
          <App />
        </ContextProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
