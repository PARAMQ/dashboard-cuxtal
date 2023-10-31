import { createOrUpdateBinnacle, getBinnalce, uploadEvidences, getBinnacles, getWordBinnacle, deleteBinnacle } from '~/api/binnacles'

export const actions = {
  async createOrUpdateBinnacle ({ commit }, data) {
    const res = await createOrUpdateBinnacle(data)
    return res
  },
  async uploadEvidences ({ commit }, data) {
    const res = await uploadEvidences(data)
    return res
  },
  async getBinnacle ({ commit }, id) {
    const res = await getBinnalce(id)
    return res
  },
  async getBinnacles ({ commit }) {
    const res = await getBinnacles()
    return res
  },
  async getWordBinnacle ({ commit }, id) {
    const res = await getWordBinnacle(id)
    return res
  },
  async deleteBinnacle ({ commit }, data) {
    const res = await deleteBinnacle(data)
    return res
  }
}
