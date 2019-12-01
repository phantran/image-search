import axios from "axios";

import {
  SET_FAVOURITE,
  SET_NOT_FAVOURITE,
  REMOVE_FAVOURITE,
  LOAD_FAVOURITE_IMAGES
} from "./types";

export const setFavourite = (liked, imageUrl) => async dispatch => {
  if (liked === true) {
    dispatch({
      type: SET_FAVOURITE,
      payload: imageUrl
    });
  } else {
    dispatch({
      type: SET_NOT_FAVOURITE,
      payload: imageUrl
    });
  }
};

export const loadFavouriteImages = idFavourites => async dispatch => {
  try {
    let retrieved_ids = idFavourites.join();
    console.log(retrieved_ids);
    if (retrieved_ids != "") {
      let response = await axios.get("http://api.giphy.com/v1/gifs", {
        params: {
          ids: retrieved_ids,
          api_key: "QFCVo7yMSBHC6EhFxxPkznOxe7CnZ1aQ"
        }
      });
      console.log("here");
      console.log(response.data);
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
    console.log(err);
  }
};
