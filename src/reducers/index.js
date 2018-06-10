import { combineReducers } from 'redux'

import {
  SET_PRODUCTS,
  SET_STATUS
} from '../actions'


function products(state=[], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      const {products} = action
      return products
    default: return state
  }
}

function status(state='loading', action) {
  switch (action.type) {
    case SET_STATUS:
      const {status} = action
      return status
    default: return state
  }
}

export default combineReducers({
  products,
  status
})
