import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search users..." }) => {
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <span className="search-bar__icon">🔍</span>
        <input
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="search-bar__clear"
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;