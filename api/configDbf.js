import axios from 'axios'

const serviceDbf = axios.create({
  baseURL: process.env.baseUrl
  // timeout: 30000
})

// // // console.log(process.env.baseUrl)

serviceDbf.interceptors.request.use((config) => {
  return config
})

// response interceptor
serviceDbf.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error.response)
  }
)

export default serviceDbf
