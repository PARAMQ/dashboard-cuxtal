import request from './config'

export const getParticipants = () => {
  return request({
    url: '/apiParticipants.php/participants',
    method: 'GET'
  })
}

export const getInfoParticipant = (id) => {
  return request({
    url: '/apiParticipants.php/participant/' + id,
    method: 'GET'
  })
}

export const createParticipant = (data) => {
  return request({
    url: '/apiParticipants.php/participant',
    method: 'POST',
    data
  })
}

export const deleteParticipant = (data) => {
  return request({
    url: '/apiParticipants.php/participant',
    method: 'DELETE',
    data
  })
}
