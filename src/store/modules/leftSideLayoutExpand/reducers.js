import {
  OPEN_LEFT, CLOSE_LEFT
} from './actions'

export function leftSideLayoutExpand (state = {

}, action) {
  switch (action.type) {

    case OPEN_LEFT:
      return Object.assign({}, state, {
        expandStatus: 'open'
      })

    case CLOSE_LEFT:
      return Object.assign({}, state, {
        expandStatus: 'close'
      })

    default:
      return state
  }
}
