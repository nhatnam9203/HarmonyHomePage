import React, { Component } from "react";
import { Zoom } from "react-reveal"

export default class Error extends Component {
  render() {
    return (
      <Zoom direction="right">
        <div className="error-required">Required</div>
      </Zoom>
    )
  }
}
