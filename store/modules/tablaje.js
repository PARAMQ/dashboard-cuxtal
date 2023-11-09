import { getTablajes, createOrUpdateTablaje, getInfoTablaje, deleteTablaje } from '~/api/tablaje'

export const actions = {
  async getTablajes ({ commit }) {
    const res = await getTablajes()
    return res
  },
  async createOrUpdateTablaje ({ commit }, data) {
    const res = await createOrUpdateTablaje(data)
    return res
  },
  async getInfoTablaje ({ commit }, id) {
    const res = await getInfoTablaje(id)
    return res
  },
  async deleteTablaje ({ commit }, data) {
    const res = await deleteTablaje(data)
    return res
  }
}
