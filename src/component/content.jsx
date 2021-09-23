import React, { Component } from "react";
import List from "./list";
import PlayerWrapper from "./playerWrappper";

class Content extends Component {
  render() {
    const watching = this.props.watching;
    const items = this.props.items;
    const playerHandler = this.props.playerHandler
    return (
      <div className="content">
        {watching && <PlayerWrapper watching={watching}></PlayerWrapper>}
        <List items={items} playerHandler={playerHandler}></List>
      </div>
    );
  }
}

export default Content;
