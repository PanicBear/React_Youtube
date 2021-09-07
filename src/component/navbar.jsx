import React, { Component } from "react";

class Navbar extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.inputRef.current.value);
    this.formRef.current.reset();
  };
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <a href="/">logo</a>
        </div>
        <form
          ref={this.formRef}
          className="search-form"
          method="get"
          onSubmit={this.onSubmit}
        >
          <input ref={this.inputRef} className="search-input" type="search" />
          <button className="search-button" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Navbar;
