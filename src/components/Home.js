import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.store.map((s) => (
          <Item item={s} isDiscount={this.props.isDiscount}/>
        ))}
      </div>
    );
  }
}

export default Home;
