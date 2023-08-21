import request from './config'

export const getRequestMotives = () => {
  return request({
    url: '/apiRequestMotive.php/request_motives',
    method: 'GET'
  })
}

export const createOrUpdateRequestMotive = (RequestMotive) => {
  return request({
    url: '/apiRequestMotive.php/request_motive',
    method: 'POST',
    data: RequestMotive
  })
}

export const deleteRequestMotive = (RequestMotive) => {
  return request({
    url: '/apiRequestMotive.php/request_motive',
    method: 'DELETE',
    data: RequestMotive
  })
}

export const getInfoRequestMotive = (id) => {
  return request({
    url: '/apiRequestMotive.php/request_motive/' + id,
    method: 'GET'
  })
}
