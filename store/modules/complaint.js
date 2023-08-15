import { getComplaints, createOrUpdateComplaint, getInfoComplaint, deleteComplaint, updateFilesComplaint } from '~/api/complaint'

export const actions = {
  async getComplaints ({ commit }) {
    const res = await getComplaints()
    return res
  },
  async createOrUpdateComplaint ({ commit }, data) {
    const res = await createOrUpdateComplaint(data)
    return res
  },
  async updateFilesComplaint ({ commit }, data) {
    const res = await updateFilesComplaint(data)
    return res
  },
  async getInfoComplaint ({ commit }, id) {
    const res = await getInfoComplaint(id)
    return res
  },
  async deleteComplaint ({ commit }, data) {
    const res = await deleteComplaint(data)
    return res
  }
}
