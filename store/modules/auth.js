import {
  setToken,
  removeRefreshToken,
  removeToken
} from '../../utils/cookies'

import { login, getUserInfo, getNewToken, checkToken } from '../../api'
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
    // console.log(res)
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
      // console.log(user)
      // TODO: refresh token
      delete user.password
      commit('set_user', user)
      return user
    }
    return state.user
  },
  async getNewToken ({ commit }) {
    removeToken()
    const res = await getNewToken()
    setToken(res)
  },
  async checkToken ({ commit }, data) {
    const res = await checkToken(data)
    return res
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
