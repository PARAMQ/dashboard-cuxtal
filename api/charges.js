import request from './config'

export const getCharges = () => {
  return request({
    url: '/apiCharges.php/charges',
    method: 'GET'
  })
}

export const createOrUpdateCharge = (charge) => {
  return request({
    url: '/apiCharges.php/charge',
    method: 'POST',
    data: charge
  })
}

export const deleteCharge = (charge) => {
  return request({
    url: '/apiCharges.php/charge',
    method: 'DELETE',
    data: charge
  })
}

export const getInfoCharge = (id) => {
  return request({
    url: '/apiCharges.php/charge/' + id,
    method: 'GET'
  })
}
