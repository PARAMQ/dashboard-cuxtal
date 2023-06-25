import {
  getZones,
  getSubZones,
  deleteZone,
  deleteSubZone,
  createOrUpdateZone,
  createOrUpdateSubZone,
  getInfoZone,
  getInfoSubZone
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
  },
  async getSubZones ({ commit }) {
    const res = await getSubZones()
    return res
  },
  async createOrUpdateSubZone ({ commit }, data) {
    const res = await createOrUpdateSubZone(data)
    return res
  },
  async deleteSubZone ({ commit }, data) {
    const res = await deleteSubZone(data)
    return res
  },
  async getInfoSubZone ({ commit }, id) {
    const res = await getInfoSubZone(id)
    return res
  }
}
