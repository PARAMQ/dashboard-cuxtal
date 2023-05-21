import {
  getAdscriptions,
  createOrUpdateAdscription,
  deleteAdscription,
  getInfoAdscription
} from '~/api/adscriptions'

export const actions = {
  async getAdscriptions ({ commit }) {
    const res = await getAdscriptions()
    return res
  },
  async createOrUpdateAdscription ({ commit }, data) {
    const res = await createOrUpdateAdscription(data)
    return res
  },
  async deleteAdscription ({ commit }, data) {
    const res = await deleteAdscription(data)
    return res
  },
  async getInfoAdscription ({ commit }, id) {
    const res = await getInfoAdscription(id)
    return res
  }
}
