import { TO_FAVOURITES_VIEW, TO_MAIN_PAGE } from "../actions/types";

const initialState = {
  showFavourites: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TO_FAVOURITES_VIEW:
      return {
        ...state,
        showFavourites: true
      };
    case TO_MAIN_PAGE:
      return {
        ...state,
        showFavourites: false
      };

    default:
      return state;
  }
}
