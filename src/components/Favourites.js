import React from "react";
import ImageCard from "./ImageCard";

import { connect } from "react-redux";
import PropTypes from "prop-types";
//import { unLikedImage } from "../actions/favourites";
import "../styles/Favourites.css";

const Favourites = props => {
  let imgs;
  if (props.returnedFavImages.length != 0) {
    imgs = props.returnedFavImages.map(img => {
      return <ImageCard key={img.id} image={img} />;
    });
    return <div className="fav-image-list">{imgs}</div>;
  } else {
    return (
      <div className="fav-not-found">
        <p>You have no favourite image!</p>
      </div>
    );
  }
};

Favourites.propTypes = {
  returnedFavImages: PropTypes.array.isRequired
  //unLikedImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  returnedFavImages: state.favourites.returnedFavImages
});

export default connect(mapStateToProps, null)(Favourites);
