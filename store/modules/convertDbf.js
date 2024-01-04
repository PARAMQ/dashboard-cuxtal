import { getCoordinates } from '~/api/convertDbf'

export const actions = {
  async getCoordinates ({ commit }, data) {
    const res = await getCoordinates(data)
    return res
  }
}
