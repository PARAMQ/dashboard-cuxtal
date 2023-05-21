import {
  getZones,
  deleteZone,
  createOrUpdateZone,
  getInfoZone
} from '~/api/zones'

export const actions = {
  async getZones ({ commit }) {
    const res = await getZones()
    return res
  },
  async createOrUpdateZone ({ commit }, data) {
    const res = await createOrUpdateZone(data)
    return res
  },
  async deleteZone ({ commit }, data) {
    const res = await deleteZone(data)
    return res
  },
  async getInfoZone ({ commit }, id) {
    const res = await getInfoZone(id)
    return res
  }
}
