import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <img className="thumb" src="https://picsum.photos/156/88" alt="" />
        <div className="vid-info">
          <span className="name">name</span>
          <br />
          <strong className="channel">channel</strong>
        </div>
      </div>
    );
  }
}

export default Item;
