// client/src/components/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to QHealth</h1>
      <p className="mb-4">
        At QHealth, we offer top-notch health and fitness services to help you achieve your wellness goals. Join us today to take the first step towards a healthier you!
      </p>
      <Link to="/register" className="text-blue-500 underline">
        Register for a Membership
      </Link>
    </div>
  );
};

export default Home;

  