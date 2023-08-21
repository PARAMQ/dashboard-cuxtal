import {
  getTechnicalOpinions,
  deleteTechnicalOpinion,
  createOrUpdateTechnicalOpinion,
  getInfoTechnicalOpinion,
  updateFilesTechnicalOpinion
} from '~/api/technicalOp'

export const actions = {
  async getTechnicalOps ({ commit }) {
    const res = await getTechnicalOpinions()
    return res
  },
  async createOrUpdateTechnicalOp ({ commit }, data) {
    const res = await createOrUpdateTechnicalOpinion(data)
    return res
  },
  async deleteTechnicalOp ({ commit }, data) {
    const res = await deleteTechnicalOpinion(data)
    return res
  },
  async getInfoTechnicalOp ({ commit }, id) {
    const res = await getInfoTechnicalOpinion(id)
    return res
  },
  async uploadFiles ({ commit }, data) {
    const res = await updateFilesTechnicalOpinion(data)
    return res
  }
}
