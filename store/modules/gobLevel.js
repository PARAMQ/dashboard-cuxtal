import { getGobLevels, createOrUpdateGobLevel, getInfoGobLevel, deleteGobLevel } from '~/api/gobLevel'

export const actions = {
  async getGobLevels ({ commit }) {
    const res = await getGobLevels()
    return res
  },
  async createOrUpdateGobLevel ({ commit }, data) {
    const res = await createOrUpdateGobLevel(data)
    return res
  },
  async getInfoGobLevel ({ commit }, id) {
    const res = await getInfoGobLevel(id)
    return res
  },
  async deleteGobLevel ({ commit }, data) {
    const res = await deleteGobLevel(data)
    return res
  }
}
