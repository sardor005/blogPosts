import jsonPlaceHolder from "../apis/jsonPlaceHolder"
import _ from 'lodash'


export const fetchPost =  () => {
    return async function  (dispatch) {
      const response = await jsonPlaceHolder.get("/posts");
      dispatch({ type: "FETCH_POST", payload: response.data });
    };
    
}

export const fetchUser = (id) => dispatch => {
  _fetchUsers(id, dispatch)
}

const _fetchUsers = _.memoize( async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/user/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
})