
export const getList = () => (dispatch) => {
    dispatch({ type: 'GET_RESTURANTS_SUCCESS', list: [{ test: "data" }] })
}
