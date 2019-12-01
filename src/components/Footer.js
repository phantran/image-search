import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer color-gray-light">
        <div className="text-footer">
          <p className="text-bold">Gallereasy POC web app</p>
        </div>
        <div className="text-footer">
          <p className="text-bold text-black">2359 Media</p>
        </div>
      </div>
    );
  }
}
