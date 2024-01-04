import axios from 'axios'

const serviceDbf = axios.create({
  baseURL: process.env.baseUrl,
  mode: 'cors',
  credentials: 'same-origin',
  cache: false
  // timeout: 30000
})
