import { TO_FAVOURITES_VIEW, TO_MAIN_PAGE } from "./types";

export const toFavourites = () => async dispatch => {
  dispatch({
    type: TO_FAVOURITES_VIEW
  });
};

export const toMainPage = () => async dispatch => {
  dispatch({
    type: TO_MAIN_PAGE
  });
};
