import { getUsers, createUser, deleteUser } from '~/api/users'

export const actions = {
  async getUsers ({ commit }) {
    const res = await getUsers()
    return res
  },
  async createUser ({ commit }, data) {
    const res = await createUser(data)
    return res
  },
  async deleteUser ({ commit }, data) {
    const res = await deleteUser(data)
    return res
  }
}
