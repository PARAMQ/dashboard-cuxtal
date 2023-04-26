import { getVehicles, createVehicle, getInfoVehicle, deleteVehicle } from '~/api/vehicles'

export const actions = {
  async getVehicles ({ commit }, query) {
    const res = await getVehicles(query)
    return res
  },
  async createVehicle ({ commit }, data) {
    const res = await createVehicle(data)
    return res
  },
  async getInfoVehicle ({ commit }, id) {
    const res = await getInfoVehicle(id)
    return res
  },
  async deleteVehicle ({ commit }, data) {
    const res = await deleteVehicle(data)
    return res
  }
}
