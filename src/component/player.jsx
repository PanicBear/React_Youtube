import React, { Component } from "react";

class Player extends Component {
  render() {
    const watching = this.props.watching;
    const videoId = watching.id.videoId ? watching.id.videoId : watching.id;
    return (
      <iframe
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}

export default Player;
