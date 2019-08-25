import { getDeviceList } from '@/api/device'

const SET_DEVICE_LIST = 'SET_DEVICE_LIST'
const user = {
  state: {
    devices: []
  },
  mutations: {
    [SET_DEVICE_LIST](state, list) {
      state.devices = list
    }
  },
  actions: {
    // 获取设备列表
    getDeviceList({ commit }) {
      return getDeviceList().then(resp => {
        let data = resp.data
        commit(SET_DEVICE_LIST, data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {
    devices: state => state.devices
  }
}

export default user
