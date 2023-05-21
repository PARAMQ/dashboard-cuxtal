import {
  getCharges,
  createOrUpdateCharge,
  deleteCharge,
  getInfoCharge
} from '~/api/charges'

export const actions = {
  async getCharges ({ commit }) {
    const res = await getCharges()
    return res
  },
  async createOrUpdateCharge ({ commit }, data) {
    const res = await createOrUpdateCharge(data)
    return res
  },
  async deleteCharge ({ commit }, data) {
    const res = await deleteCharge(data)
    return res
  },
  async getInfoCharge ({ commit }, id) {
    const res = await getInfoCharge(id)
    return res
  }
}
