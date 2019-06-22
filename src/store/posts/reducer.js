import * as TYPES from "./types";

const initialState = {
  isLoading: false,
  postsList: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.IS_POSTS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case TYPES.GET_ALL_POSTS:
      return {
        ...state,
        postsList: action.payload
      }
    default:
      return { ...state };
  }
};

export default postsReducer;
