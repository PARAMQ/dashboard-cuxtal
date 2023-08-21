import request from './config'

export const getTechnicalOpinions = () => {
  return request({
    url: '/apiTechnicalOpinion.php/technical_opinions',
    method: 'GET'
  })
}

export const createOrUpdateTechnicalOpinion = (TechnicalOpinion) => {
  return request({
    url: '/apiTechnicalOpinion.php/technical_opinion',
    method: 'POST',
    data: TechnicalOpinion
  })
}

export const deleteTechnicalOpinion = (TechnicalOpinion) => {
  return request({
    url: '/apiTechnicalOpinion.php/technical_opinion',
    method: 'DELETE',
    data: TechnicalOpinion
  })
}

export const getInfoTechnicalOpinion = (id) => {
  return request({
    url: '/apiTechnicalOpinion.php/technical_opinion/' + id,
    method: 'GET'
  })
}

export const updateFilesTechnicalOpinion = (files) => {
  return request({
    url: '/apiTechnicalOpinion.php/upload_doc',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: files
  })
}
