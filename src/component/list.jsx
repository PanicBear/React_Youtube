import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  render() {
    const items = this.props.items;
    const playerHandler = this.props.playerHandler;
    return (
      <div className="list">
        {items.map((item) => (
          <Item key={item.id} item={item} playerHandler={playerHandler} />
        ))}
      </div>
    );
  }
}

export default List;
