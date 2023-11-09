import request from './config'

export const getTablajes = () => {
  return request({
    url: '/apiCadastralRecord.php/cadastral_records',
    method: 'GET'
  })
}

export const createOrUpdateTablaje = (Tablaje) => {
  return request({
    url: '/apiCadastralRecord.php/cadastral_record',
    method: 'POST',
    data: Tablaje
  })
}

export const deleteTablaje = (Tablaje) => {
  return request({
    url: '/apiCadastralRecord.php/cadastral_record',
    method: 'DELETE',
    data: Tablaje
  })
}

export const getInfoTablaje = (id) => {
  return request({
    url: '/apiCadastralRecord.php/cadastral_record/' + id,
    method: 'GET'
  })
}
