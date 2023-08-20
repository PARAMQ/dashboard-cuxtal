import {
  getRequestMotives,
  deleteRequestMotive,
  createOrUpdateRequestMotive,
  getInfoRequestMotive
} from '~/api/requestMotive'

export const actions = {
  async getRequestMotives ({ commit }) {
    const res = await getRequestMotives()
    return res
  },
  async createOrUpdateRequestMotive ({ commit }, data) {
    const res = await createOrUpdateRequestMotive(data)
    return res
  },
  async deleteRequestMotive ({ commit }, data) {
    const res = await deleteRequestMotive(data)
    return res
  },
  async getInfoRequestMotive ({ commit }, id) {
    const res = await getInfoRequestMotive(id)
    return res
  }
}
