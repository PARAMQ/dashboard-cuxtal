import { getParticipants, createParticipant, getInfoParticipant, deleteParticipant } from '~/api/participants'

export const actions = {
  async getParticipants ({ commit }, query) {
    const res = await getParticipants(query)
    return res
  },
  async createParticipant ({ commit }, data) {
    const res = await createParticipant(data)
    return res
  },
  async getInfoParticipant ({ commit }, id) {
    const res = await getInfoParticipant(id)
    return res
  },
  async deleteParticipant ({ commit }, data) {
    const res = await deleteParticipant(data)
    return res
  }
}
