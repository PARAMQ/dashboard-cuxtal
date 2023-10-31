import request from './config'

export const createUser = data => {
  return request({
    url: '/Login.php/user',
    method: 'POST',
    data
  })
}

export const userData = () => {
  return request({
    url: '/Login.php/user_data',
    method: 'POST'
  })
}

export const getUsers = () => {
  return request({
    url: '/apiUsers.php/users',
    method: 'GET'
  })
}

export const deleteUser = (data) => {
  return request({
    url: '/apiUsers.php/user',
    method: 'DELETE',
    data
  })
}
