import request from './config'

export const getIncidents = () => {
  return request({
    url: '/apiIncidents.php/incidentss',
    method: 'GET'
  })
}

export const createOrUpdateIncident = (data) => {
  return request({
    url: '/apiIncidents.php/incidents',
    method: 'POST',
    data
  })
}

export const deleteIncident = (data) => {
  return request({
    url: '/apiIncidents.php/aincidents',
    method: 'DELETE',
    data
  })
}

export const getInfoIncident = (id) => {
  return request({
    url: '/apiIncidents.php/incidents/' + id,
    method: 'GET'
  })
}
