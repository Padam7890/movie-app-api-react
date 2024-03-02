import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function submit() {
    if (searchValue.trim() === "") {
      const url = `/`;
      navigate(url);
    } else {
      const url = `/category/${encodeURIComponent(searchValue)}`;
      navigate(url);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      submit();
    }
  }

  return (
    <>
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPress} 
      />
      <div className="icon">
        <FontAwesomeIcon
          onClick={submit}
          className="search-icon"
          icon={faSearch}
        />
      </div>
    </>
  );
};
export default Search;
