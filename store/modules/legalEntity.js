import {
  getLegalEntitys,
  deleteLegalEntity,
  createOrUpdateLegalEntity,
  getInfoLegalEntity
} from '~/api/legalEntity'
import {
  getTypeLegalEntitys,
  deleteTypeLegalEntity,
  createOrUpdateTypeLegalEntity,
  getInfoTypeLegalEntity
} from '~/api/typeLegalEntity'

export const actions = {
  async getLegalEntitys ({ commit }) {
    const res = await getLegalEntitys()
    return res
  },
  async createOrUpdateLegalEntity ({ commit }, data) {
    const res = await createOrUpdateLegalEntity(data)
    return res
  },
  async deleteLegalEntity ({ commit }, data) {
    const res = await deleteLegalEntity(data)
    return res
  },
  async getInfoLegalEntity ({ commit }, id) {
    const res = await getInfoLegalEntity(id)
    return res
  },
  async getTypeLegalEntitys ({ commit }) {
    const res = await getTypeLegalEntitys()
    return res
  },
  async createOrUpdateTypeLegalEntity ({ commit }, data) {
    const res = await createOrUpdateTypeLegalEntity(data)
    return res
  },
  async deleteTypeLegalEntity ({ commit }, data) {
    const res = await deleteTypeLegalEntity(data)
    return res
  },
  async getInfoTypeLegalEntity ({ commit }, id) {
    const res = await getInfoTypeLegalEntity(id)
    return res
  }
}
