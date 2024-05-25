//import React from 'react';
import { useNavigate } from 'react-router-dom';

const MembershipSelection = () => {
  const navigate = useNavigate();

  const handleMembershipSelection = (membershipType) => {
    const token = localStorage.getItem('token');
    if (token) {
      // User is logged in, redirect to registration with membership type
      navigate(`/register/${membershipType}`);
    } else {
      // User is not logged in, redirect to login with membership type
      navigate(`/sign-in?membership=${membershipType}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Choose Your Membership</h2>
      <div className="flex justify-between">
        <button onClick={() => handleMembershipSelection('basic')} className="block p-4 bg-green-500 text-white rounded-lg shadow-lg">
          Basic - $100
        </button>
        <button onClick={() => handleMembershipSelection('premium')} className="block p-4 bg-blue-500 text-white rounded-lg shadow-lg">
          Premium - $300
        </button>
      </div>
    </div>
  );
};

export default MembershipSelection;
