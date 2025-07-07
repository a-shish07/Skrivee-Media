import React from 'react';
import './SortControls.css';

const SortControls = ({ sortBy, sortOrder, onSortChange }) => {
  const handleSortByChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      
      onSortChange(sortBy, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      
      onSortChange(newSortBy, 'asc');
    }
  };

  const getSortIcon = (option) => {
    if (sortBy !== option) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="sort-controls">
      <span className="sort-controls__label">Sort by:</span>
      <div className="sort-controls__buttons">
        <button
          className={`sort-controls__button ${sortBy === 'name' ? 'active' : ''}`}
          onClick={() => handleSortByChange('name')}
        >
          Name {getSortIcon('name')}
        </button>
        <button
          className={`sort-controls__button ${sortBy === 'country' ? 'active' : ''}`}
          onClick={() => handleSortByChange('country')}
        >
          Country {getSortIcon('country')}
        </button>
      </div>
    </div>
  );
};

export default SortControls;