import {
  getTechnicalOps,
  deleteTechnicalOp,
  createOrUpdateTechnicalOp,
  getInfoTechnicalOp
} from '~/api/technicalOp'

export const actions = {
  async getTechnicalOps ({ commit }) {
    const res = await getTechnicalOps()
    return res
  },
  async createOrUpdateTechnicalOp ({ commit }, data) {
    const res = await createOrUpdateTechnicalOp(data)
    return res
  },
  async deleteTechnicalOp ({ commit }, data) {
    const res = await deleteTechnicalOp(data)
    return res
  },
  async getInfoTechnicalOp ({ commit }, id) {
    const res = await getInfoTechnicalOp(id)
    return res
  }
}
