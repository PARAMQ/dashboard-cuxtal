import request from './config'

/*  LOGIN  */
export const login = (data) => {
  return request({
    url: '/Login.php/login',
    method: 'POST',
    data
  })
}

/*  USER  */
export const getUserInfo = () => {
  return request({
    url: '/Login.php/user_data',
    method: 'POST'
  })
}

export const getNewToken = () => {
  return request({
    url: '/Login.php/getNewToken',
    method: 'POST'
  })
}

export const checkToken = (data) => {
  return request({
    url: '/Login.php/getTokenExp',
    method: 'POST',
    data
  })
}
