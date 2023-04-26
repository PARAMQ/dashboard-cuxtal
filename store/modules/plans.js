import { getPlans, createPlan } from '~/api/plans'

export const actions = {
  async getPlans ({ commit }) {
    const res = await getPlans()
    return res
  },
  async createPlan ({ commit }, data) {
    const res = await createPlan(data)
    return res
  }
}
