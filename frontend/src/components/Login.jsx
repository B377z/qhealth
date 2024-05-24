// client/src/components/Login.js
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      console.log(res.data);

      const queryParams = new URLSearchParams(location.search);
      const membershipType = queryParams.get('membership');
      console.log('Membership Type:', membershipType); // Debugging log

      if (membershipType) {
        navigate(`/register/${membershipType}`);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full p-2 mb-4 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 mb-4 border rounded" />
      <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded">Login</button>
      {/* Add Sign Up link */}
      <p className="mt-4">
        Don&apos;t have an account? <Link to="/sign-up" className="text-blue-500 underline">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
