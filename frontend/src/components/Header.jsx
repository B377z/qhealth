//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  return (
    <header className="bg-slate-100 shadow-sm p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-extrabold text-sm sm:text-xl flex flex-wrap">
            <span className="border-r border-r-zinc-900 pr-1">Q</span>
            <span className="border-r border-r-neutral-100 pr-1">Health</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg relative flex items-center">
          <input type="text" placeholder="Search..." className="bg-slate-50 p-2 rounded-lg" />
          <FaSearch className="bg-slate-100 ml-2" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-600 hover:underline">About</li>
          </Link>
          <Link to="/services">
            <li className="hidden sm:inline text-slate-600 hover:underline">Services</li>
          </Link>
          {token ? (
            <>
              <Link to="/profile">
                <li className="hidden sm:inline text-slate-600 hover:underline">Profile</li>
              </Link>
              <li>
                <button onClick={handleLogout} className="text-slate-700 hover:underline">Logout</button>
              </li>
            </>
          ) : (
            <Link to="/sign-in">
              <li className="text-slate-700 hover:underline">Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

