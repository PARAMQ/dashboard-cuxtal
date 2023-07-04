import request from './config'

export const getZones = () => {
  return request({
    url: '/apiOperativeZones.php/operative_zones',
    method: 'GET'
  })
}

export const createOrUpdateZone = (zone) => {
  return request({
    url: '/apiOperativeZones.php/operative_zones',
    method: 'POST',
    data: zone
  })
}

export const deleteZone = (zone) => {
  return request({
    url: '/apiOperativeZones.php/operative_zones',
    method: 'DELETE',
    data: zone
  })
}

export const getInfoZone = (id) => {
  return request({
    url: '/apiOperativeZones.php/operative_zones/' + id,
    method: 'GET'
  })
}
