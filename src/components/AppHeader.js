import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toFavourites, toMainPage } from "../actions/view";
import { loadFavouriteImages } from "../actions/favourites";

import "../styles/AppHeader.css";

const AppHeader = ({
  toFavourites,
  toMainPage,
  loadFavouriteImages,
  noFavourites,
  favouriteImages
}) => {
  const [favouriteClicked, setFavouriteClicked] = useState(false);

  return (
    <div className="page-header">
      <div className="text-brand">
        <div>
          <p className="color-gray text-thin">
            Galler
            <span className="color-dark-gray text-bold">easy</span>
          </p>
        </div>
      </div>

      <hr className="header-hr" />

      <div className="nav-text">
        <div className="text-header">
          <a>
            <p
              className={
                favouriteClicked
                  ? "color-gray-light text-normal"
                  : "color-dark-gray text-normal"
              }
              onClick={e => {
                toMainPage();
                setFavouriteClicked(false);
              }}
            >
              Search
            </p>
          </a>
        </div>

        <div className="text-header">
          <a>
            <p
              className={
                favouriteClicked
                  ? "color-dark-gray text-normal"
                  : "color-gray-light text-normal"
              }
              onClick={e => {
                loadFavouriteImages(favouriteImages);
                toFavourites();
                setFavouriteClicked(true);
              }}
            >
              {noFavourites == 0
                ? "Favourites"
                : "Favourites (" + noFavourites + ")"}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  noFavourites: PropTypes.number.isRequired,
  favouriteImages: PropTypes.array,
  toFavourites: PropTypes.func.isRequired,
  toMainPage: PropTypes.func.isRequired,
  loadFavouriteImages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  noFavourites: state.favourites.noFavourites,
  favouriteImages: state.favourites.favouriteImages
});

export default connect(mapStateToProps, {
  toFavourites,
  toMainPage,
  loadFavouriteImages
})(AppHeader);
