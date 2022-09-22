import React from "react";
import styles from "./search_header.module.css";

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
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"
          width={35}
          height={35}
          alt="."
          className={styles.img}
        />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        ref={inputRef}
        type="search"
        className={styles.input}
        placeholder="Search.."
      />
      <button type="submit" className={styles.button} onClick={onClick}>
        <img
          src="/images/search.png"
          width={20}
          height={20}
          alt="."
          className={styles.buttonImg}
        />
      </button>
    </header>
  );
};

export default SearchBar;
