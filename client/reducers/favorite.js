import { UPDATE_FAVORITES } from '../actions/favorite'

const INITIAL_STATE = {
  favorites: []
}

const favorite = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites
      }

    default:
      return state
  }
}

export default favorite
