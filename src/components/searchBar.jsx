import React from "react";

const SearchBar = (props) => {
  const inputRef = React.createRef();

  const handleSearch = () => {
    const { Onsearch } = props;
    const name = inputRef.current.value;
    Onsearch(name);
    console.log(name);
  };

  const onClick = () => {
    handleSearch();
  };

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
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search.."
        />
        <button className="search-button" onClick={onClick}>
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
};

export default SearchBar;
