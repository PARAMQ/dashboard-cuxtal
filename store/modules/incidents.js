import {
  getIncidents,
  createOrUpdateIncident,
  deleteIncident,
  getInfoIncident
} from '~/api/incidents'

export const actions = {
  async getIncidents ({ commit }) {
    const res = await getIncidents()
    return res
  },
  async createOrUpdateIncident ({ commit }, data) {
    const res = await createOrUpdateIncident(data)
    return res
  },
  async deleteIncident ({ commit }, data) {
    const res = await deleteIncident(data)
    return res
  },
  async getInfoIncident ({ commit }, id) {
    const res = await getInfoIncident(id)
    return res
  }
}
