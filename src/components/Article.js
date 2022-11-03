import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div>
        {this.props.item.color} {this.props.item.type}
      </div>
    );
  }
}

export default Article;
