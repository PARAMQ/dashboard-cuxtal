import {
  getResponses,
  deleteResponse,
  createOrUpdateResponse,
  getInfoResponse
} from '~/api/response'

export const actions = {
  async getResponses ({ commit }) {
    const res = await getResponses()
    return res
  },
  async createOrUpdateResponse ({ commit }, data) {
    const res = await createOrUpdateResponse(data)
    return res
  },
  async deleteResponse ({ commit }, data) {
    const res = await deleteResponse(data)
    return res
  },
  async getInfoResponse ({ commit }, id) {
    const res = await getInfoResponse(id)
    return res
  }
}
