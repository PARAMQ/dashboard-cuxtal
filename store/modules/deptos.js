import { getDeptos, createDepto, getInfoDepto, deleteDepto } from '~/api/departaments'

export const actions = {
  async getDeptos ({ commit }, query) {
    const res = await getDeptos(query)
    return res
  },
  async createDepto ({ commit }, data) {
    const res = await createDepto(data)
    return res
  },
  async getInfoDepto ({ commit }, id) {
    const res = await getInfoDepto(id)
    return res
  },
  async deleteDepto ({ commit }, data) {
    const res = await deleteDepto(data)
    return res
  }
}
