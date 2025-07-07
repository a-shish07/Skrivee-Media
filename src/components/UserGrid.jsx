import React from 'react';
import UserCard from './UserCard';
import './UserGrid.css';

const UserGrid = ({ users, loading, error }) => {
  if (loading) {
    return (
      <div className="user-grid__loading">
        <div className="loading-spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-grid__error">
        <div className="error-icon">⚠️</div>
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="user-grid__empty">
        <div className="empty-icon">🔍</div>
        <h3>No users found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;