import request from './config'

export const getVehicles = (params) => {
  return request({
    url: '/apiVehicles.php/vehicles',
    method: 'GET',
    params
  })
}

export const getInfoVehicle = (id) => {
  return request({
    url: '/apiVehicles.php/vehicle/' + id,
    method: 'GET'
  })
}

export const createVehicle = (data) => {
  return request({
    url: '/apiVehicles.php/vehicle',
    method: 'POST',
    data
  })
}

export const deleteVehicle = (data) => {
  return request({
    url: '/apiVehicles.php/vehicle',
    method: 'DELETE',
    data
  })
}
