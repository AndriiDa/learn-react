import * as TYPES from "./types";

export const getAllPosts = response => ({
  type: TYPES.GET_ALL_POSTS,
  payload: response
});

export const postsIsLoading = isLoading => ({
  type: TYPES.IS_POSTS_LOADING,
  payload: isLoading
});
