import request from './config'

export const createOrUpdateBinnacle = (binnacle) => {
  return request({
    url: '/apiBinnacle.php/binnacle',
    method: 'POST',
    data: binnacle
  })
}

export const uploadEvidences = (data) => {
  return request({
    url: '/apiBinnacle.php/upload_images',
    method: 'POST',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const getBinnalce = (id) => {
  return request({
    url: '/apiBinnacle.php/binnacle/' + id,
    method: 'GET'
  })
}

export const getBinnacles = () => {
  return request({
    url: '/apiBinnacle.php/binnacles',
    method: 'GET'
  })
}

export const getWordBinnacle = (id) => {
  return request({
    url: '/Bitacora.php/bitacora/' + id,
    responseType: 'blob',
    method: 'GET'
  })
}
