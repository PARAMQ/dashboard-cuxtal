import {
  getApplicantTypes,
  deleteApplicantType,
  createOrUpdateApplicantType,
  getInfoApplicantType
} from '~/api/applicantType'

export const actions = {
  async getApplicantTypes ({ commit }) {
    const res = await getApplicantTypes()
    return res
  },
  async createOrUpdateApplicantType ({ commit }, data) {
    const res = await createOrUpdateApplicantType(data)
    return res
  },
  async deleteApplicantType ({ commit }, data) {
    const res = await deleteApplicantType(data)
    return res
  },
  async getInfoApplicantType ({ commit }, id) {
    const res = await getInfoApplicantType(id)
    return res
  }
}
