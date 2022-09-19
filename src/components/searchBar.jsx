import React, { Component } from "react";

class SearchBar extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    console.log(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <nav className="searchbar">
        <img
          src="/images/logo.png"
          width={35}
          height={35}
          alt="."
          className="search-youtube-logo"
        />
        <span className="search-youtube-name">Youtube</span>
        <form className="search-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            className="search-input"
            placeholder="Search.."
          />
          <button className="search-button">
            <img
              src="/images/search.png"
              width={20}
              height={20}
              alt="."
              className="search-button-logo"
            />
          </button>
        </form>
      </nav>
    );
  }
}

export default SearchBar;
