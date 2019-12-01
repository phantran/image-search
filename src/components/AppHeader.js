import React, { Component } from "react";
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
  return (
    <div className="page-header">
      <div className="text-brand">
        <p className="color-gray text-thin">
          Galler
          <span className="color-dark-gray text-bold">easy</span>
        </p>
      </div>
      <hr />
      <div className="text-header">
        <p
          className="color-dark-gray text-normal"
          onClick={e => {
            toMainPage();
          }}
        >
          Search
        </p>
      </div>
      <a>
        <div className="text-header">
          <p
            className="color-gray-light text-normal"
            onClick={e => {
              console.log(favouriteImages);
              loadFavouriteImages(favouriteImages);
              toFavourites();
            }}
          >
            {noFavourites == 0
              ? "Favourites"
              : "Favourites (" + noFavourites + ")"}
          </p>
        </div>
      </a>
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
