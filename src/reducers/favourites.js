import {
  SET_FAVOURITE,
  SET_NOT_FAVOURITE,
  LOAD_FAVOURITE_IMAGES,
  LOAD_APP,
  IS_LOADING_FAV
} from "../actions/types";

const initialState = {
  noFavourites: 0,
  favouriteImages: [],
  returnedFavImages: [],
  isLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  let setValue;
  switch (type) {
    case SET_FAVOURITE:
      setValue = state.noFavourites + 1;
      state.favouriteImages.push(payload);
      localStorage.setItem("numFavImages", setValue);
      localStorage.setItem("favImages", state.favouriteImages.join());
      return {
        ...state,
        noFavourites: setValue,
        favouriteImages: state.favouriteImages
      };

    case SET_NOT_FAVOURITE:
      setValue = state.noFavourites - 1;
      if (setValue < 0) {
        setValue = 0;
      }
      let deletedItemIndex = state.favouriteImages.indexOf(payload);
      if (deletedItemIndex > -1) {
        state.favouriteImages.splice(deletedItemIndex, 1);
      }
      localStorage.setItem("numFavImages", setValue);
      localStorage.setItem("favImages", state.favouriteImages.join());
      return {
        ...state,
        noFavourites: setValue,
        favouriteImages: state.favouriteImages
      };

    case LOAD_FAVOURITE_IMAGES:
      return {
        ...state,
        returnedFavImages: payload,
        isLoading: false
      };

    // Will be replaced by data fetching from the backend database in real app
    // Instead of data from the local storage
    case LOAD_APP:
      let numFavImages, favImages;
      localStorage.getItem("numFavImages") != null
        ? (numFavImages = parseInt(localStorage.getItem("numFavImages")))
        : (numFavImages = 0);

      localStorage.getItem("favImages") != null
        ? (favImages = localStorage.getItem("favImages").split(","))
        : (favImages = []);

      return {
        ...state,
        noFavourites: numFavImages,
        favouriteImages: favImages
      };

    case IS_LOADING_FAV:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
