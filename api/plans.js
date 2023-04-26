import request from './config'

export const getPlans = () => {
  return request({
    url: '/apiPlanning.php/plan',
    method: 'GET'
  })
}

export const createPlan = (data) => {
  return request({
    url: '/apiPlanning.php/plan',
    method: 'POST',
    data
  })
}

export const getInfoPlan = (id) => {
  return request({
    url: '/apiPlanning.php/plan/' + id,
    method: 'GET'
  })
}

export const deletePlan = (data) => {
  return request({
    url: '/apiPlanning.php/plan',
    method: 'DELETE',
    data
  })
}
