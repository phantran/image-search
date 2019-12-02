import axios from "axios";

import {
  SET_FAVOURITE,
  SET_NOT_FAVOURITE,
  LOAD_FAVOURITE_IMAGES,
  LOAD_APP,
  IS_LOADING_FAV,
  ERROR_GETTING_IMAGES
} from "./types";

export const setFavourite = (liked, imageID) => async dispatch => {
  if (liked === true) {
    dispatch({
      type: SET_FAVOURITE,
      payload: imageID
    });
  } else {
    dispatch({
      type: SET_NOT_FAVOURITE,
      payload: imageID
    });
  }
};

export const loadFavouriteImages = idFavourites => async dispatch => {
  dispatch({
    type: IS_LOADING_FAV
  });
  try {
    let retrieved_ids = idFavourites.join();
    if (retrieved_ids != "") {
      let response = await axios.get("http://api.giphy.com/v1/gifs", {
        params: {
          ids: retrieved_ids,
          api_key: "QFCVo7yMSBHC6EhFxxPkznOxe7CnZ1aQ"
        }
      });

      dispatch({
        type: LOAD_FAVOURITE_IMAGES,
        payload: response.data.data
      });
    } else {
      dispatch({
        type: LOAD_FAVOURITE_IMAGES,
        payload: []
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR_GETTING_IMAGES
    });
  }
};

export const loadApp = () => async dispatch => {
  dispatch({
    type: LOAD_APP
  });
};
