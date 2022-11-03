import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        {this.props.item.item} costs{" "}
        {this.props.isDiscount ==='true'
          ? this.props.item.price * (1 - this.props.item.discount)
          : this.props.item.price}
      </div>
    );
  }
}

export default Item;
