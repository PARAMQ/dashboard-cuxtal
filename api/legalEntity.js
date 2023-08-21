import request from './config'

export const getLegalEntitys = () => {
  return request({
    url: '/apiLegalEntity.php/legal_entitys',
    method: 'GET'
  })
}

export const createOrUpdateLegalEntity = (LegalEntity) => {
  return request({
    url: '/apiLegalEntity.php/legal_entity',
    method: 'POST',
    data: LegalEntity
  })
}

export const deleteLegalEntity = (LegalEntity) => {
  return request({
    url: '/apiLegalEntity.php/legal_entity',
    method: 'DELETE',
    data: LegalEntity
  })
}

export const getInfoLegalEntity = (id) => {
  return request({
    url: '/apiLegalEntity.php/legal_entity/' + id,
    method: 'GET'
  })
}
