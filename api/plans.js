import request from './config'

export const getPlans = (data) => {
  const startDate = new Date(data[0])
  const endDate = new Date(data[1])
  return request({
    url: '/apiPlanning.php/plan/' + (startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()) + '/' + (endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate()),
    method: 'GET'
  })
}

export const getAllPlannifications = () => {
  return request({
    url: '/apiPlanning.php/plan',
    method: 'GET'
  })
}

export const createOrUpdatePlan = (data) => {
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
