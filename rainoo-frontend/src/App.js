import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import GoogleSuccess from './pages/GoogleSuccess';
import CheckoutPage from './pages/CheckOutPage';
import Navbar from './components/NavBar';
import Footer from './pages/Footer';
import About from './pages/About';
import Partnerships from './pages/Partnerships';
import Solutions from './pages/Solutions';
import { AuthProvider } from './context/AuthContext';

import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-layout">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/google-success" element={<GoogleSuccess />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/solutions" element={<Solutions />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
