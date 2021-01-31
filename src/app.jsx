import "./app.css";

import React, { Component } from "react";

class App extends Component {
  request() {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA1kIMYTD7NZMdHfa3nO3QXf4UOBvDtoGw",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <React.Fragment>
        <div onLoad={this.request}></div>
      </React.Fragment>
    );
  }
}

export default App;
