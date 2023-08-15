import { getIlicitDenounceds, createOrUpdateIlicitDenounced, getInfoIlicitDenounced, deleteIlicitDenounced } from '~/api/IlicitDenounced'

export const actions = {
  async getIlicitDenounceds ({ commit }) {
    const res = await getIlicitDenounceds()
    return res
  },
  async createOrUpdateIlicitDenounced ({ commit }, data) {
    const res = await createOrUpdateIlicitDenounced(data)
    return res
  },
  async getInfoIlicitDenounced ({ commit }, id) {
    const res = await getInfoIlicitDenounced(id)
    return res
  },
  async deleteIlicitDenounced ({ commit }, data) {
    const res = await deleteIlicitDenounced(data)
    return res
  }
}
