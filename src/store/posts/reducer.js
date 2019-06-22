import * as TYPES from "./types";

const initialState = {
  isLoading: false,
  postsData: [{ id: 1, name: "user name" }]
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.IS_POSTS_LOADING:
      return {
        ...state,
        postsData: action.payload
      };
    default:
      return { ...state };
  }
};

export default postsReducer;
