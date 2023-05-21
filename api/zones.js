import request from './config'

export const getZones = () => {
  return request({
    url: '/apiZoning.php/zonings',
    method: 'GET'
  })
}

export const createOrUpdateZone = (zone) => {
  return request({
    url: '/apiZoning.php/zoning',
    method: 'POST',
    data: zone
  })
}

export const deleteZone = (zone) => {
  return request({
    url: '/apiZoning.php/zoning',
    method: 'DELETE',
    data: zone
  })
}

export const getInfoZone = (id) => {
  return request({
    url: '/apiZoning.php/zoning/' + id,
    method: 'GET'
  })
}
