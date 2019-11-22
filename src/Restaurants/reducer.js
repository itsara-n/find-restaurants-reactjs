const initialState = {
  list: [],
  loading: false,
  error: null
}

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESTURANTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_RESTURANTS_SUCCESS':
      return {
        ...state,
        list: action.list,
        loading: false,
        error: initialState.error
      }
    case 'GET_RESTURANTS_FAILURE':
      return {
        ...state,
        list: initialState.list,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default restaurantsReducer
