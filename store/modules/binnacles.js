import { createOrUpdateBinnacle, getBinnalce, uploadEvidences } from '~/api/binnacles'

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
  }
}
