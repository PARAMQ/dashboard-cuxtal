import { getTenures, createOrUpdateTenure, getInfoTenure, deleteTenure } from '~/api/tenure'

export const actions = {
  async getTenures ({ commit }) {
    const res = await getTenures()
    return res
  },
  async createOrUpdateTenure ({ commit }, data) {
    const res = await createOrUpdateTenure(data)
    return res
  },
  async getInfoTenure ({ commit }, id) {
    const res = await getInfoTenure(id)
    return res
  },
  async deleteTenure ({ commit }, data) {
    const res = await deleteTenure(data)
    return res
  }
}
