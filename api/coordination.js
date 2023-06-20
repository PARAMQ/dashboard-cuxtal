import request from './config'

export const getCoordinations = () => {
  return request({
    url: '/apiCoordinations.php/coordinations',
    method: 'GET'
  })
}

export const createOrUpdateCoordination = (Coordination) => {
  return request({
    url: '/apiCoordinations.php/coordinations',
    method: 'POST',
    data: Coordination
  })
}

export const deleteCoordination = (Coordination) => {
  return request({
    url: '/apiCoordinations.php/coordinations',
    method: 'DELETE',
    data: Coordination
  })
}

export const getInfoCoordination = (id) => {
  return request({
    url: '/apiCoordinations.php/coordinations/' + id,
    method: 'GET'
  })
}
