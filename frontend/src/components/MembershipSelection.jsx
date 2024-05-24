import { Link } from 'react-router-dom';

const MembershipSelection = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Choose Your Membership</h2>
      <div className="flex justify-between">
        <Link to="/sign-in?membership=basic" className="block p-4 bg-green-500 text-white rounded-lg shadow-lg">
          Basic - $100
        </Link>
        <Link to="/sign-in?membership=premium" className="block p-4 bg-blue-500 text-white rounded-lg shadow-lg">
          Premium - $300
        </Link>
      </div>
    </div>
  );
}

export default MembershipSelection;