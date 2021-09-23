import React, { Component } from "react";
import Player from "./player";
import VideoInfo from "./videoInfo";

class PlayerWrapper extends Component {
  render() {
    const watching = this.props.watching;
    return (
      <div className="player-wrapper">
        <Player watching={watching} />
        <VideoInfo watching={watching} />
      </div>
    );
  }
}

export default PlayerWrapper;
