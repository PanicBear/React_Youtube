import React, { Component } from "react";

class Item extends Component {
  onClick = (e) => {
    const item = this.props.item;
    const playerHandler = this.props.playerHandler;
    console.log(e);
    console.log(item);
    playerHandler(item);
  };
  render() {
    const snippet = this.props.item.snippet;
    const title = snippet.title;
    const thumbnailUrl = snippet.thumbnails.default.url;
    const channelTitle = snippet.channelTitle;
    return (
      <div className="item" onClick={this.onClick}>
        <img className="thumb" src={thumbnailUrl} alt="" />
        <div className="vid-info">
          <span className="name">{title}</span>
          <strong className="channel">{channelTitle}</strong>
        </div>
      </div>
    );
  }
}

export default Item;
