import { getCoordinations, createOrUpdateCoordination, getInfoCoordination, deleteCoordination } from '~/api/coordination'

export const actions = {
  async getCoordinations ({ commit }) {
    const res = await getCoordinations()
    return res
  },
  async createOrUpdateCoordination ({ commit }, data) {
    const res = await createOrUpdateCoordination(data)
    return res
  },
  async getInfoCoordination ({ commit }, id) {
    const res = await getInfoCoordination(id)
    return res
  },
  async deleteCoordination ({ commit }, data) {
    const res = await deleteCoordination(data)
    return res
  }
}
