import React, { Component } from "react";
import List from "./list";

class Content extends Component {
  render() {
    const items = this.props.items;
    return <div className="content">
      <List items={items}></List>
    </div>;
  }
}

export default Content;