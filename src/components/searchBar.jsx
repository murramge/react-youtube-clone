import React, { Component } from "react";

class SearchBar extends Component {
  inputRef = React.createRef();

  handleSearch = () => {
    const { Onsearch } = this.props;
    const name = this.inputRef.current.value;
    Onsearch(name);
    console.log(name);
  };

  onClick = () => {
    this.handleSearch();
    // this.inputRef.current.value = "";
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
        <div className="search-form">
          <input
            ref={this.inputRef}
            type="text"
            className="search-input"
            placeholder="Search.."
          />
          <button className="search-button" onClick={this.onClick}>
            <img
              src="/images/search.png"
              width={20}
              height={20}
              alt="."
              className="search-button-logo"
            />
          </button>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
