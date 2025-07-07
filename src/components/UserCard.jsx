import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const fullName = `${user.name.first} ${user.name.last}`;
  
  return (
    <div className="user-card">
      <div className="user-card__image-container">
        <img 
          src={user.picture.medium} 
          alt={`${fullName}'s profile`}
          className="user-card__image"
        />
      </div>
      <div className="user-card__content">
        <h3 className="user-card__name">{fullName}</h3>
        <p className="user-card__email">{user.email}</p>
        <p className="user-card__country">
          <span className="user-card__country-icon">🌍</span>
          {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;