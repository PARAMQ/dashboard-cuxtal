import request from './config'

export const getComplaints = () => {
  return request({
    url: '/apiComplaint.php/complaints',
    method: 'GET'
  })
}

export const createOrUpdateComplaint = (Complaint) => {
  return request({
    url: '/apiComplaint.php/complaint',
    method: 'POST',
    data: Complaint
  })
}

export const updateFilesComplaint = (files) => {
  return request({
    url: '/apiComplaint.php/upload_doc',
    method: 'POST',
    data: files
  })
}

export const deleteComplaint = (Complaint) => {
  return request({
    url: '/apiComplaint.php/complaint',
    method: 'DELETE',
    data: Complaint
  })
}

export const getInfoComplaint = (id) => {
  return request({
    url: '/apiComplaint.php/complaint/' + id,
    method: 'GET'
  })
}
