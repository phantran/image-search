import {
  SET_FAVOURITE,
  SET_NOT_FAVOURITE,
  REMOVE_FAVOURITE,
  LOAD_FAVOURITE_IMAGES
} from "../actions/types";

const initialState = {
  noFavourites: 0,
  favouriteImages: [],
  returnedFavImages: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  let setValue;
  switch (type) {
    case SET_FAVOURITE:
      setValue = state.noFavourites + 1;
      state.favouriteImages.push(payload);
      return {
        ...state,
        noFavourites: setValue,
        favouriteImages: state.favouriteImages
      };
    case SET_NOT_FAVOURITE:
      setValue = state.noFavourites - 1;
      let deletedItemIndex = state.favouriteImages.indexOf(payload);
      if (deletedItemIndex > -1) {
        state.favouriteImages.splice(deletedItemIndex, 1);
      }
      return {
        ...state,
        noFavourites: setValue,
        favouriteImages: state.favouriteImages
      };
    case LOAD_FAVOURITE_IMAGES:
      return {
        ...state,
        returnedFavImages: payload
      };
    default:
      return state;
  }
}
