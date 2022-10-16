import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";
import classes from "./Search.module.css";

function Search() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <>
      <SearchBar
        className={classes}
        posts={posts}
        setSearchResults={setSearchResults}
      />
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default Search;
