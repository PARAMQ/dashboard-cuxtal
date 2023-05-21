import request from './config'

export const getAdscriptions = () => {
  return request({
    url: '/apiAdscriptionArea.php/adscription_areas',
    method: 'GET'
  })
}

export const createOrUpdateAdscription = (adscrtiptionArea) => {
  return request({
    url: '/apiAdscriptionArea.php/adscription_area',
    method: 'POST',
    data: adscrtiptionArea
  })
}

export const deleteAdscription = (adscrtiptionArea) => {
  return request({
    url: '/apiAdscriptionArea.php/adscription_area',
    method: 'DELETE',
    data: adscrtiptionArea
  })
}

export const getInfoAdscription = (id) => {
  return request({
    url: '/apiAdscriptionArea.php/adscription_area/' + id,
    method: 'GET'
  })
}
