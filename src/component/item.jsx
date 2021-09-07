import React, { Component } from "react";

class Item extends Component {
  render() {
    const snippet = this.props.item.snippet;
    const title = snippet.title;
    const thumbnailUrl=snippet.thumbnails.default.url;
    const channelTitle = snippet.channelTitle;
    return (
      <div className="item">
        <img className="thumb" src={thumbnailUrl} alt="" />
        <div className="vid-info">
          <span className="name">{title}</span>
          <br />
          <strong className="channel">{channelTitle}</strong>
        </div>
      </div>
    );
  }
}

export default Item;
