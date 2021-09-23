import React, { Component } from "react";
import Navbar from "./component/navbar";
import Content from "./component/content";
import "./app.css";
class App extends Component {
  key1 = "AIzaSyAAGc5-7w931KT4BPwH9Mv8X9ctk0f1TVc";
  key2 = "AIzaSyBVf5GoN4nFYuoumZXHR6ZeUZvyYOMWgsI";
  state = {
    searchParam: undefined,
    watching:undefined,
    items: undefined,
  };
  baseURL = "https://youtube.googleapis.com/youtube/v3";
  // reqSearch = async (searchParam) => {
  //   this.setState({ ...this.setState, searchParam });
  //   try {
  //     const response = await fetch(
  //       `${this.baseURL}/search?part=snippet&maxResults=25&q=${searchParam}&key=${this.key2}`,
  //       { method: "get" }
  //     );
  //     const list = await response.json();
  //     const item = list.item;
  //     this.setState({ ...this.state, searchParam, item });
  //   } catch (error) {
  //     return console.log("error", error);
  //   }
  // };
  reqMost = async () => {
    const response = await fetch(
      `${this.baseURL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key2}`,
      { method: "get" }
    );
    const result = await response.json();
    const items = result.items;
    this.setState({ ...this.state, searchParam: undefined, items });
  };
  setPlayer = (item)=>{
    this.setState({...this.state, watching:item})
  }
  render() {
    const watching = this.state.watching;
    const items = this.state.items;
    const playerHandler = this.setPlayer;
    items ?? this.reqMost();
    return (
      <>
        <Navbar search={this.reqSearch}></Navbar>
        {items && <Content watching={watching} items={items} playerHandler={playerHandler}></Content>}
      </>
    );
  }
}
export default App;
