import axios from "axios";
import { LOAD_IMAGES } from "./types";

export const getImages = query => async dispatch => {
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: query, api_key: "QFCVo7yMSBHC6EhFxxPkznOxe7CnZ1aQ", limit: 8 }
  });
  console.log(response);
  dispatch({
    type: LOAD_IMAGES,
    payload: response.data.data
  });
};
