import axios from 'axios';

export const getList = () => (dispatch) => {
  dispatch({ type: 'GET_RESTURANTS_REQUEST' })
  axios.get('https://cors-anywhere.herokuapp.com/' + 'https://scg-assignment.herokuapp.com/SCG/Restaurants')
    .then(res => {
      dispatch({
        type: 'GET_RESTURANTS_SUCCESS',
        list: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'GET_RESTURANTS_FAILURE',
        error: err.response ? err.response.statusText : 'Something went wrong'
      })
    })
}
