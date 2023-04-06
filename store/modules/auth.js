import {
  setToken,
  removeRefreshToken,
  removeToken
} from '../../utils/cookies'

import { login, getUserInfo } from '../../api'
import { updateMainUser, changePassword } from '~/api/accounts'

export const state = () => ({
  user: null
})

export const mutations = {
  set_user (state, value) {
    state.user = value
  },
  reset_user (store) {
    store.user = null
  }
}
export const actions = {
  async login ({ commit }, data) {
    const res = await login(data)
    setToken(res)
    return res
  },
  // user logout
  logout ({ commit }) {
    commit('reset_user')
    removeToken()
    removeRefreshToken()
    Promise.resolve()
  },
  async getUser ({ commit, state }, token) {
    if (token && !state.user) {
      // const data = decodeToken(token)
      const user = await getUserInfo()
      // TODO: refresh token
      commit('set_user', user)
      return user
    }
    return state.user
  },
  async updateAccount ({ commit }, data) {
    const res = await updateMainUser(data)
    return res.id
  },
  async changePassword ({ commit }, data) {
    const res = await changePassword(data)
    return res
  }
}
