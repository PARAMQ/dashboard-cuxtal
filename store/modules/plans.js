import { getPlans, createPlan } from '~/api/plans'

export const actions = {
  async getPlans ({ commit }, data) {
    const res = await getPlans(data)
    return res
  },
  async createPlan ({ commit }, data) {
    const res = await createPlan(data)
    return res
  }
}
