import {
  getResponseOps,
  deleteResponseOp,
  createOrUpdateResponseOp,
  getInfoResponseOp
} from '~/api/responseOp'

export const actions = {
  async getResponseOps ({ commit }) {
    const res = await getResponseOps()
    return res
  },
  async createOrUpdateResponseOp ({ commit }, data) {
    const res = await createOrUpdateResponseOp(data)
    return res
  },
  async deleteResponseOp ({ commit }, data) {
    const res = await deleteResponseOp(data)
    return res
  },
  async getInfoResponseOp ({ commit }, id) {
    const res = await getInfoResponseOp(id)
    return res
  }
}
