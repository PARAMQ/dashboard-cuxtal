import request from './config'

export const getMotiveDescriptions = () => {
  return request({
    url: '/apiMotiveDescription.php/motive_descriptions',
    method: 'GET'
  })
}

export const createOrUpdateMotiveDescription = (MotiveDescription) => {
  return request({
    url: '/apiMotiveDescription.php/motive_description',
    method: 'POST',
    data: MotiveDescription
  })
}

export const deleteMotiveDescription = (MotiveDescription) => {
  return request({
    url: '/apiMotiveDescription.php/motive_description',
    method: 'DELETE',
    data: MotiveDescription
  })
}

export const getInfoMotiveDescription = (id) => {
  return request({
    url: '/apiMotiveDescription.php/motive_description/' + id,
    method: 'GET'
  })
}
