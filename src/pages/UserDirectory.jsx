import React, { useState, useEffect, useMemo } from 'react';
import { fetchUsers } from '../services/userService';
import SearchBar from '../components/SearchBar';
import UserGrid from '../components/UserGrid';
import SortControls from '../components/SortControls';
import ThemeToggle from '../components/ThemeToggle';
import './UserDirectory.css';

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (err) {
        setError('Failed to load users. Please try again later.');
        console.error('Error loading users:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users;

    // Filter users based on search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = users.filter(user => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        const country = user.location.country.toLowerCase();
        return fullName.includes(searchLower) || country.includes(searchLower);
      });
    }

    // Sort users
    const sorted = [...filtered].sort((a, b) => {
      let aValue, bValue;

      if (sortBy === 'name') {
        aValue = `${a.name.first} ${a.name.last}`.toLowerCase();
        bValue = `${b.name.first} ${b.name.last}`.toLowerCase();
      } else if (sortBy === 'country') {
        aValue = a.location.country.toLowerCase();
        bValue = b.location.country.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    return sorted;
  }, [users, searchTerm, sortBy, sortOrder]);

  const handleSortChange = (newSortBy, newSortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  return (
    <div className="user-directory">
      <ThemeToggle />
      
      <header className="user-directory__header">
        <h1 className="user-directory__title">User Directory</h1>
        <p className="user-directory__subtitle">
          Discover and connect with people from around the world
        </p>
      </header>

      <div className="user-directory__controls">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search by name or country..."
        />
        
        <SortControls
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
      </div>

      <main className="user-directory__content">
        <UserGrid
          users={filteredAndSortedUsers}
          loading={loading}
          error={error}
        />
      </main>

      {!loading && !error && (
        <footer className="user-directory__footer">
          <p>
            Showing {filteredAndSortedUsers.length} of {users.length} users
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </footer>
      )}
    </div>
  );
};

export default UserDirectory;