import React, { Component } from "react";

class VideoInfo extends Component {
  render() {
    const watching = this.props.watching;
    const snippet = watching.snippet;
    // TODO
    // get desc
    return (
      <div className="video-desc">
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <p>{snippet.description}</p>
      </div>
    );
  }
}

export default VideoInfo;
