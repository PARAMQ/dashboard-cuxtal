import request from './config'

export const getApplicationMethods = () => {
  return request({
    url: '/apiApplicationMethod.php/application_methods',
    method: 'GET'
  })
}

export const createOrUpdateApplicationMethod = (ApplicationMethod) => {
  return request({
    url: '/apiApplicationMethod.php/application_method',
    method: 'POST',
    data: ApplicationMethod
  })
}

export const deleteApplicationMethod = (ApplicationMethod) => {
  return request({
    url: '/apiApplicationMethod.php/application_method',
    method: 'DELETE',
    data: ApplicationMethod
  })
}

export const getInfoApplicationMethod = (id) => {
  return request({
    url: '/apiApplicationMethod.php/application_method/' + id,
    method: 'GET'
  })
}
