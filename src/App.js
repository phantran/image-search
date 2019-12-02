import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadApp } from "./actions/favourites";
import AppHeader from "./components/AppHeader";
import MainPage from "./components/MainPage";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  // Get number of favourites images and favourites images when app is loaded
  componentDidMount() {
    this.props.loadApp();
  }
  render() {
    return (
      <div className="App-main">
        <div>
          <AppHeader />
          {this.props.showFavourites ? <Favourites /> : <MainPage />}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  showFavourites: PropTypes.bool.isRequired,
  loadApp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showFavourites: state.view.showFavourites
});

export default connect(mapStateToProps, { loadApp })(App);
