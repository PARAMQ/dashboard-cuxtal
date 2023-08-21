import {
  getApplicationMethods,
  deleteApplicationMethod,
  createOrUpdateApplicationMethod,
  getInfoApplicationMethod
} from '~/api/applicationMethod'

export const actions = {
  async getApplicationMethods ({ commit }) {
    const res = await getApplicationMethods()
    return res
  },
  async createOrUpdateApplicationMethod ({ commit }, data) {
    const res = await createOrUpdateApplicationMethod(data)
    return res
  },
  async deleteApplicationMethod ({ commit }, data) {
    const res = await deleteApplicationMethod(data)
    return res
  },
  async getInfoApplicationMethod ({ commit }, id) {
    const res = await getInfoApplicationMethod(id)
    return res
  }
}
