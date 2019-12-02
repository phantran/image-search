import React from "react";
import ImageCard from "./ImageCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import "../styles/Favourites.css";

const Favourites = props => {
  if (props.isLoading == false) {
    let imgs;
    if (props.returnedFavImages.length != 0) {
      imgs = props.returnedFavImages.map(img => {
        return <ImageCard key={img.id} image={img} />;
      });

      return <div className="fav-image-list">{imgs}</div>;
    } else {
      return (
        <div className="fav-not-found">
          <h1 className="text-not-found-fav text-thin">
            You have no favourite image!
          </h1>
        </div>
      );
    }
  } else {
    return (
      <div className="flex-div-center ">
        <Loader type="ThreeDots" color="#BFBFBF" height={100} width={100} />
      </div>
    );
  }
};

Favourites.propTypes = {
  returnedFavImages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  returnedFavImages: state.favourites.returnedFavImages,
  isLoading: state.favourites.isLoading
});

export default connect(mapStateToProps, null)(Favourites);
