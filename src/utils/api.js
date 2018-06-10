import axios    from 'axios'
import config   from '../config.json'

const HOST = config.endpoint

export function getProducts() {
  return axios.get(`${HOST}/products`)
}
