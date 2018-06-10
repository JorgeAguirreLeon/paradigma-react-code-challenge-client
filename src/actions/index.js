export const SET_PRODUCTS          = 'SET_PRODUCTS'
export const SET_STATUS            = 'SET_STATUS'

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products
  }
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    status
  }
}
