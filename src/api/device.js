import axios from 'axios'
import urlPrefix from './urlPrefix'

function getDeviceList() {
  return axios({
    method: 'get',
    url: `${urlPrefix}/device/list`
  })
}

export { getDeviceList }
