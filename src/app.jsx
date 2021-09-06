import React, { Component } from "react";
import Navbar from "./component/navbar";
import Content from "./component/content";
import "./app.css";

class App extends Component {
  state = {
    searchParam: undefined,
  };
  baseURL = "https://youtube.googleapis.com/youtube/v3";
  reqSearch = (searchParam) => {
    this.setState({ ...this.setState, searchParam });
    console.log(searchParam);
    return fetch(
      `${this.baseURL}/search?part=snippet&maxResults=25&q=${searchParam}&key=AIzaSyAAGc5-7w931KT4BPwH9Mv8X9ctk0f1TVc`,
      { method: "get" }
    )
      .then((response) => response.json())
      .then(console.log)
      .catch((error) => console.log("error", error));
  };
  reqMost = () => {
    return fetch(
      `${this.baseURL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAAGc5-7w931KT4BPwH9Mv8X9ctk0f1TVc`,
      { method: "get" }
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };
  render() {
    return (
      <>
        <Navbar search={this.reqSearch}></Navbar>
        <Content></Content>
      </>
    );
  }
}
export default App;
