import { getVegetations, createOrUpdateVegetation, getInfoVegetation, deleteVegetation } from '~/api/vegetation'

export const actions = {
  async getVegetations ({ commit }) {
    const res = await getVegetations()
    return res
  },
  async createOrUpdateVegetation ({ commit }, data) {
    const res = await createOrUpdateVegetation(data)
    return res
  },
  async getInfoVegetation ({ commit }, id) {
    const res = await getInfoVegetation(id)
    return res
  },
  async deleteVegetation ({ commit }, data) {
    const res = await deleteVegetation(data)
    return res
  }
}
