import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFavourite } from "../actions/favourites";
import "../styles/ImageCard.css";
import likeIcon from "../images/like.svg";
import unlikeIcon from "../images/unlike.svg";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, liked: false };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  componentDidMount() {
    if (this.props.favouriteImages.includes(this.props.image.id)) {
      this.setState({ liked: true });
    }
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };
  mouseOut() {
    this.setState({ hover: false });
  }

  handleLike() {
    this.setState({ liked: true });
    this.props.setFavourite(true, this.props.image.id);
  }

  handleUnlike() {
    this.setState({ liked: false });
    this.props.setFavourite(false, this.props.image.id);
  }

  render() {
    return (
      <div
        className="div-relative"
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
      >
        <img
          className="div-relative"
          ref={this.imageRef}
          src={this.props.image.images.downsized.url}
          alt={this.props.image.title}
        />
        {this.state.liked ? (
          <img
            className="icon"
            src={likeIcon}
            alt="heart icon"
            onClick={this.handleUnlike.bind(this)}
          />
        ) : (
          <img
            className={
              this.state.hover ? "icon icon-show" : "icon icon-notshow"
            }
            src={unlikeIcon}
            alt="heart icon"
            onClick={this.handleLike.bind(this)}
          />
        )}
      </div>
    );
  }
}

ImageCard.propTypes = {
  setFavourite: PropTypes.func.isRequired,
  favouriteImages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  favouriteImages: state.favourites.favouriteImages
});

export default connect(mapStateToProps, { setFavourite })(ImageCard);
