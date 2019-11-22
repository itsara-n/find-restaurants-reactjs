const initialState = {
  answer: [],
  loading: false,
  error: null
}

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MATH_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_MATH_SUCCESS':
      return {
        ...state,
        answer: action.answer,
        loading: false,
        error: initialState.error
      }
    case 'GET_MATH_FAILURE':
      return {
        ...state,
        answer: initialState.answer,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default mathReducer
