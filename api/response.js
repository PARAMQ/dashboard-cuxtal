import request from './config'

export const getResponses = () => {
  return request({
    url: '/apiResponse.php/responses',
    method: 'GET'
  })
}

export const createOrUpdateResponse = (Response) => {
  return request({
    url: '/apiResponse.php/response',
    method: 'POST',
    data: Response
  })
}

export const deleteResponse = (Response) => {
  return request({
    url: '/apiResponse.php/response',
    method: 'DELETE',
    data: Response
  })
}

export const getInfoResponse = (id) => {
  return request({
    url: '/apiResponse.php/response/' + id,
    method: 'GET'
  })
}
