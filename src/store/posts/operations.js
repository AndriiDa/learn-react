import axios from "axios";
import * as ACTIONS from "./actions";

export const fetchPostsData = () => dispatch => {
  dispatch(ACTIONS.postsIsLoading(true));
  return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      console.log(res.data)
      dispatch(ACTIONS.getAllPosts(res.data));
      dispatch(ACTIONS.postsIsLoading(false));
    })
    .catch((error) => {
      console.log(error);
    })
};
