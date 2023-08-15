import request from './config'

export const getIlicitDenounceds = () => {
  return request({
    url: '/apiIlicitDenounced.php/ilicits_denounced',
    method: 'GET'
  })
}

export const createOrUpdateIlicitDenounced = (IlicitDenounced) => {
  return request({
    url: '/apiIlicitDenounced.php/ilicit_denounced',
    method: 'POST',
    data: IlicitDenounced
  })
}

export const deleteIlicitDenounced = (IlicitDenounced) => {
  return request({
    url: '/apiIlicitDenounced.php/ilicit_denounced',
    method: 'DELETE',
    data: IlicitDenounced
  })
}

export const getInfoIlicitDenounced = (id) => {
  return request({
    url: '/apiIlicitDenounced.php/ilicit_denounced/' + id,
    method: 'GET'
  })
}
