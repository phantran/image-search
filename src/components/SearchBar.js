import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getImages } from "../actions/images";
import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = { val: "" };

  onInputChange = event => {
    this.setState({ val: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.getImages(this.state.val);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="flexContainer">
          <input
            className="inputStyle"
            type="text"
            value={this.state.val}
            onChange={this.onInputChange}
            placeholder="Start searching for images!"
          />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getImages: PropTypes.func.isRequired
};

export default connect(null, { getImages })(SearchBar);
