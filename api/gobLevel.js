import request from './config'

export const getGobLevels = () => {
  return request({
    url: '/apiGovLevel.php/gov_levels',
    method: 'GET'
  })
}

export const createOrUpdateGobLevel = (GobLevel) => {
  return request({
    url: '/apiGovLevel.php/gov_level',
    method: 'POST',
    data: GobLevel
  })
}

export const deleteGobLevel = (GobLevel) => {
  return request({
    url: '/apiGovLevel.php/gov_level',
    method: 'DELETE',
    data: GobLevel
  })
}

export const getInfoGobLevel = (id) => {
  return request({
    url: '/apiGovLevel.php/gov_level/' + id,
    method: 'GET'
  })
}
