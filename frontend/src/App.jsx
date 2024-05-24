// client/src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import MembershipSelection from './components/MembershipSelection';
import Profile from './components/Profile';  // Import Profile Component
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} /> {/* New sign-up route */}
        <Route path="/register" element={<MembershipSelection />} /> {/* Ensure correct path */}
        <Route path="/register/:membershipType" element={<Register />} /> {/* Ensure correct path */}
        <Route path="/profile" element={<Profile />} /> {/* Add Profile Route */}
        <Route path="*" element={<Home />} /> {/* Default Route */}
      </Routes>
    </Router>
  );
};

export default App;
