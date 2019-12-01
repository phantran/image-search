import { LOAD_IMAGES } from "../actions/types";

const initialState = {
  images: [],
  imagesLoaded: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_IMAGES:
      return {
        ...state,
        images: payload,
        imagesLoaded: true
      };
    default:
      return state;
  }
}
