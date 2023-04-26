import request from './config'

export const getDeptos = () => {
  return request({
    url: '/apiDeptos.php/deptos',
    method: 'GET'
  })
}

export const getInfoDepto = (id) => {
  return request({
    url: '/apiDeptos.php/depto/' + id,
    method: 'GET'
  })
}

export const createDepto = (data) => {
  return request({
    url: '/apiDeptos.php/depto',
    method: 'POST',
    data
  })
}

export const deleteDepto = (data) => {
  return request({
    url: '/apiDeptos.php/depto',
    method: 'DELETE',
    data
  })
}
