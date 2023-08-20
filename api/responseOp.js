import request from './config'

export const getResponseOps = () => {
  return request({
    url: '/apiResponseOp.php/responses_op',
    method: 'GET'
  })
}

export const createOrUpdateResponseOp = (ResponseOp) => {
  return request({
    url: '/apiResponseOp.php/response_op',
    method: 'POST',
    data: ResponseOp
  })
}

export const deleteResponseOp = (ResponseOp) => {
  return request({
    url: '/apiResponseOp.php/response_op',
    method: 'DELETE',
    data: ResponseOp
  })
}

export const getInfoResponseOp = (id) => {
  return request({
    url: '/apiResponseOp.php/response_op/' + id,
    method: 'GET'
  })
}
