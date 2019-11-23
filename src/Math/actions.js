import axios from 'axios';

export const getXYZ = () => (dispatch) => {
  dispatch({ type: 'GET_MATH_REQUEST' })
  axios.get('https://cors-anywhere.herokuapp.com/' + 'https://scg-assignment.herokuapp.com/SCG/XYZ')
    .then(res => {
      dispatch({
        type: 'GET_MATH_SUCCESS',
        answer: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'GET_MATH_FAILURE',
        error: err.response ? err.response.statusText : 'Something went wrong'
      })
    })
}
