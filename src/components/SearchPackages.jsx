import React from "react";

function SearchModules(props) {
  const handleInput = event => props.onChange(event.target.value)

  return (
    <div className="input-group flex-nowrap">
      <div className="search-icon">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="form-control form-search"
        placeholder="Package name"
        aria-describedby="addon-wrappring"
        autoFocus
        onChange={handleInput}
      />
      <div className="input-group-append">
        <button className="btn btn-search" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchModules;
