import request from './config'

export const getVegetations = () => {
  return request({
    url: '/apiVegetation.php/vegetation_affected_all',
    method: 'GET'
  })
}

export const createOrUpdateVegetation = (Vegetation) => {
  return request({
    url: '/apiVegetation.php/vegetation_affected',
    method: 'POST',
    data: Vegetation
  })
}

export const deleteVegetation = (Vegetation) => {
  return request({
    url: '/apiVegetation.php/vegetation_affected',
    method: 'DELETE',
    data: Vegetation
  })
}

export const getInfoVegetation = (id) => {
  return request({
    url: '/apiVegetation.php/vegetation_affected/' + id,
    method: 'GET'
  })
}
