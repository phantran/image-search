import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import ImageCard from "./ImageCard";
import { fetchMoreImages } from "../actions/images";

import "../styles/ImageList.css";

const ImageList = props => {
  let loadingSpinner = (
    <div className="flex-div-center">
      <Loader type="ThreeDots" color="#BFBFBF" height={100} width={100} />
    </div>
  );
  if (props.isLoading == false) {
    let imgs_grid;
    let imgs;
    if (props.query != "") {
      if (props.images.length > 0) {
        imgs = props.images.map(img => {
          return <ImageCard key={img.id} image={img} />;
        });
        imgs_grid = <div className="image-list">{imgs}</div>;
      } else {
        imgs_grid = (
          <div className="flex-div-center">
            <p className="text-not-found text-thin">No Images Found!</p>
          </div>
        );
      }
    }

    let loadMoreButton =
      props.images.length != 0 ? (
        <div className="flex-div-center">
          <button
            className="btn"
            onClick={() =>
              props.fetchMoreImages(props.query, parseInt(imgs.length))
            }
          >
            <span>Fetch More</span>
          </button>
        </div>
      ) : (
        <div></div>
      );

    return (
      <div>
        {imgs_grid}
        {props.isFetching ? loadingSpinner : loadMoreButton}
      </div>
    );
  } else {
    return loadingSpinner;
  }
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  fetchMoreImages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  images: state.images.images,
  isLoading: state.images.isLoading,
  isFetching: state.images.isFetching,
  query: state.images.query
});

export default connect(mapStateToProps, { fetchMoreImages })(ImageList);
