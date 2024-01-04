import request from './configDbf'

export const getCoordinates = files => {
  return request({
    url: '/procesar_dbf',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: files
  })
}
