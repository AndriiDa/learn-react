import axios from "axios";
import * as ACTIONS from "./actions";

export const fetchPostsData = () => dispatch => {
  dispatch(ACTIONS.postsIsLoading(true));
  return axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
    dispatch(ACTIONS.getAllPosts(res));
    dispatch(ACTIONS.postsIsLoading(false));
  });
};
