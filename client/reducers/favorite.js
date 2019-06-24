import { UPDATE_FAVORITE } from '../actions/favorite'

const INITIAL_STATE = {}

const favorite = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FAVORITE:
      return { ...state }

    default:
      return state
  }
}

export default favorite
