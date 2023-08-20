import {
  getMotiveDescriptions,
  deleteMotiveDescription,
  createOrUpdateMotiveDescription,
  getInfoMotiveDescription
} from '~/api/motiveDescription'

export const actions = {
  async getMotiveDescriptions ({ commit }) {
    const res = await getMotiveDescriptions()
    return res
  },
  async createOrUpdateMotiveDescription ({ commit }, data) {
    const res = await createOrUpdateMotiveDescription(data)
    return res
  },
  async deleteMotiveDescription ({ commit }, data) {
    const res = await deleteMotiveDescription(data)
    return res
  },
  async getInfoMotiveDescription ({ commit }, id) {
    const res = await getInfoMotiveDescription(id)
    return res
  }
}
