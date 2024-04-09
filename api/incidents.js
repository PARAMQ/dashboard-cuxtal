import request from './config'

export const getIncidents = () => {
  return request({
    url: '/apiIncidents.php/incidents',
    method: 'GET'
  })
}

export const createOrUpdateIncident = (data) => {
  return request({
    url: '/apiIncidents.php/incident',
    method: 'POST',
    data
  })
}

export const deleteIncident = (data) => {
  return request({
    url: '/apiIncidents.php/incident',
    method: 'DELETE',
    data
  })
}

export const getInfoIncident = (id) => {
  return request({
    url: '/apiIncidents.php/incident/' + id,
    method: 'GET'
  })
}
