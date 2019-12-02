import axios from "axios";
import {
  LOAD_IMAGES,
  FETCH_MORE,
  IS_LOADING_IMG,
  IS_FETCHING,
  ERROR_GETTING_IMAGES
} from "./types";

// API services to fetch images are defined here

export const getImages = query => async dispatch => {
  dispatch({
    type: IS_LOADING_IMG
  });

  try {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: query,
        api_key: "QFCVo7yMSBHC6EhFxxPkznOxe7CnZ1aQ",
        limit: 8
      }
    });
    dispatch({
      type: LOAD_IMAGES,
      payload: { data: response.data.data, q: query }
    });
  } catch (err) {
    dispatch({
      type: ERROR_GETTING_IMAGES
    });
  }
};

export const fetchMoreImages = (query, starting_pos) => async dispatch => {
  dispatch({
    type: IS_FETCHING
  });

  try {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: query,
        api_key: "QFCVo7yMSBHC6EhFxxPkznOxe7CnZ1aQ",
        limit: 8,
        offset: starting_pos
      }
    });

    dispatch({
      type: FETCH_MORE,
      payload: response.data.data
    });
  } catch (err) {
    dispatch({
      type: ERROR_GETTING_IMAGES
    });
  }
};
