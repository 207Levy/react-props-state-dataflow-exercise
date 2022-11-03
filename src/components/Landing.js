import React, { Component } from "react";
import Item from "./Item";

class Landing extends Component {
  /* your code here */

  render() {
    return (
      <div>
        Hello, {this.props.user}. The hottest item is{" "}
        <Item item={this.props.hottest} /> <br />
      </div>
    );
  }
}

export default Landing;
