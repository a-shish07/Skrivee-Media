const API_URL = 'https://randomuser.me/api/?results=20';

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};