// client/src/components/Register.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const { membershipType } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  

  useEffect(() => {
    console.log('Selected Membership Type:', membershipType);
  }, [membershipType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      return alert('Passwords do not match!');
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { username, password, email, membership: 'trial' });
      console.log(res.data);
      alert('Registration successful!');
    } catch (error) {
      console.error(error.response.data);
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full p-2 mb-4 border rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mb-4 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 mb-4 border rounded" />
      <input type="password" placeholder="Retype Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} className="block w-full p-2 mb-4 border rounded" />
      <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
    </form>
  );
};

export default Register;

