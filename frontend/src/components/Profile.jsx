import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found, redirecting to login...');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put('http://localhost:5000/api/auth/profile', user, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <input type="text" name="username" value={user.username || ''} onChange={handleChange} className="block w-full p-2 mb-4 border rounded" disabled />
      <input type="email" name="email" value={user.email || ''} onChange={handleChange} className="block w-full p-2 mb-4 border rounded" />
      <input type="text" name="membership" value={user.membership || ''} onChange={handleChange} className="block w-full p-2 mb-4 border rounded" disabled />
      <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded">Update Profile</button>
    </form>
  );
};

export default Profile;

