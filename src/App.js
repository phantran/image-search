import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppHeader from "./components/AppHeader";
import MainPage from "./components/MainPage";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App-main">
        <AppHeader />
        {this.props.showFavourites ? <Favourites /> : <MainPage />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  showFavourites: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showFavourites: state.view.showFavourites
});

export default connect(mapStateToProps, null)(App);
