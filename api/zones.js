import request from './config'

// ------ Zonas ----- //

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

// ------ SubZonas ----- //

export const getSubZones = () => {
  return request({
    url: '/apiZoning.php/subzonings',
    method: 'GET'
  })
}

export const createOrUpdateSubZone = (subzone) => {
  return request({
    url: '/apiZoning.php/subzoning',
    method: 'POST',
    data: subzone
  })
}

export const deleteSubZone = (subzone) => {
  return request({
    url: '/apiZoning.php/subzoning',
    method: 'DELETE',
    data: subzone
  })
}

export const getInfoSubZone = (id) => {
  return request({
    url: '/apiZoning.php/subzoning/' + id,
    method: 'GET'
  })
}
