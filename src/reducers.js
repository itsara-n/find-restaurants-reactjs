import { combineReducers } from 'redux'
import restaurantsReducer from './Restaurants/reducer'
import mathReducer from './Math/reducer'

export const setPage = (page) => (dispatch) => {
  dispatch({ type: 'CHANGE_PAGE', page })
}

const initialState = {
  currentPage: 'Restaurants'
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}

export default combineReducers({
    app: appReducer,
    restaurants: restaurantsReducer,
    math: mathReducer,
})