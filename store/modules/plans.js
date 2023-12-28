import { getMetas, createOrUpdateMeta, getPlans, createOrUpdatePlan, getInfoPlan, deletePlan, updatePlan, getAllPlannifications } from '~/api/plans'

export const actions = {
  async getPlans ({ commit }, data) {
    const res = await getPlans(data)
    return res
  },
  async getAllPlans ({ commit }) {
    const res = await getAllPlannifications()
    return res
  },
  async createOrUpdatePlan ({ commit }, data) {
    const res = await createOrUpdatePlan(data)
    return res
  },
  async readPlan ({ commit }, id) {
    const res = await getInfoPlan(id)
    return res
  },
  async deletePlan ({ commit }, plan) {
    const res = await deletePlan(plan)
    return res
  },
  async updatePlan ({ commit }, plan) {
    const res = await updatePlan(plan)
    return res
  },
  async createOrUpdateMeta ({ commit }, data) {
    const res = await createOrUpdateMeta(data)
    return res
  },
  async getMetas ({ commit }) {
    const res = await getMetas()
    return res
  }
}
