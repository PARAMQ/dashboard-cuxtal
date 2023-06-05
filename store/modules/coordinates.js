import {
  getCoordinates,
  createOrUpdateCoordinate,
  deleteCoordinate,
  getInfoCoordinate
} from '~/api/coordinates'

export const actions = {
  async getCoordinates ({ commit }) {
    const res = await getCoordinates()
    return res
  },
  async createOrUpdateCoordinate ({ commit }, data) {
    const res = await createOrUpdateCoordinate(data)
    return res
  },
  async deleteCoordinate ({ commit }, data) {
    const res = await deleteCoordinate(data)
    return res
  },
  async getInfoCoordinate ({ commit }, id) {
    const res = await getInfoCoordinate(id)
    return res
  }
}
