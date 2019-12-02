import {
  LOAD_IMAGES,
  IS_LOADING_IMG,
  IS_FETCHING,
  FETCH_MORE,
  ERROR_GETTING_IMAGES
} from "../actions/types";

const initialState = {
  images: [],
  isLoading: false,
  isFetching: false,
  query: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_IMAGES:
      return {
        ...state,
        images: payload.data,
        query: payload.q,
        isLoading: false
      };
    case FETCH_MORE:
      let updated_images = state.images.concat(payload);
      return {
        ...state,
        images: updated_images,
        isFetching: false
      };
    case IS_LOADING_IMG:
      return {
        ...state,
        isLoading: true
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case ERROR_GETTING_IMAGES:
      alert(
        "Cannot retrieve images!!! There is an internal error, please try again later!"
      );
      return state;
    default:
      return state;
  }
}
