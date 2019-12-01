import { combineReducers } from "redux";
import favourites from "./favourites";
import images from "./images";
import view from "./view";

export default combineReducers({ images, favourites, view });
