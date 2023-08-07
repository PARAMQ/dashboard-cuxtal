import request from './config'

export const getTenures = () => {
  return request({
    url: '/apiTenure.php/tenures',
    method: 'GET'
  })
}

export const createOrUpdateTenure = (Tenure) => {
  return request({
    url: '/apiTenure.php/tenure',
    method: 'POST',
    data: Tenure
  })
}

export const deleteTenure = (Tenure) => {
  return request({
    url: '/apiTenure.php/tenure',
    method: 'DELETE',
    data: Tenure
  })
}

export const getInfoTenure = (id) => {
  return request({
    url: '/apiTenure.php/tenure/' + id,
    method: 'GET'
  })
}
