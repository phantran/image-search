import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";

import "../styles/ImageList.css";

const ImageList = props => {
  const imgs = props.images.map(img => {
    return <ImageCard key={img.id} image={img} />;
  });

  return <div className="image-list">{imgs}</div>;
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  images: state.images.images
});

export default connect(mapStateToProps, null)(ImageList);
