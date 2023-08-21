import request from './config'

export const getTypeLegalEntitys = () => {
  return request({
    url: '/apiTypeLegalEntity.php/type_legal_entitys',
    method: 'GET'
  })
}

export const createOrUpdateTypeLegalEntity = (TypeLegalEntity) => {
  return request({
    url: '/apiTypeLegalEntity.php/type_legal_entity',
    method: 'POST',
    data: TypeLegalEntity
  })
}

export const deleteTypeLegalEntity = (TypeLegalEntity) => {
  return request({
    url: '/apiTypeLegalEntity.php/type_legal_entity',
    method: 'DELETE',
    data: TypeLegalEntity
  })
}

export const getInfoTypeLegalEntity = (id) => {
  return request({
    url: '/apiTypeLegalEntity.php/type_legal_entity/' + id,
    method: 'GET'
  })
}
