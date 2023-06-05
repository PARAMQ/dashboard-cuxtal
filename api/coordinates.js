import request from './config'

export const getCoordinates = () => {
  return request({
    url: '/apiCoordinates.php/coordinates',
    method: 'GET'
  })
}

export const createOrUpdateCoordinate = (coordinates) => {
  return request({
    url: '/apiCoordinates.php/coordinates',
    method: 'POST',
    data: coordinates
  })
}

export const deleteCoordinate = (coordinates) => {
  return request({
    url: '/apiCoordinates.php/coordinates',
    method: 'DELETE',
    data: coordinates
  })
}

export const getInfoCoordinate = (id) => {
  return request({
    url: '/apiCoordinates.php/coordinates/' + id,
    method: 'GET'
  })
}
