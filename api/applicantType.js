import request from './config'

export const getApplicantTypes = () => {
  return request({
    url: '/apiApplicantType.php/applicant_types',
    method: 'GET'
  })
}

export const createOrUpdateApplicantType = (ApplicantType) => {
  return request({
    url: '/apiApplicantType.php/applicant_type',
    method: 'POST',
    data: ApplicantType
  })
}

export const deleteApplicantType = (ApplicantType) => {
  return request({
    url: '/apiApplicantType.php/applicant_type',
    method: 'DELETE',
    data: ApplicantType
  })
}

export const getInfoApplicantType = (id) => {
  return request({
    url: '/apiApplicantType.php/applicant_type/' + id,
    method: 'GET'
  })
}
