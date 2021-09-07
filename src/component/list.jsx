import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="list">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    );
  }
}

export default List;
