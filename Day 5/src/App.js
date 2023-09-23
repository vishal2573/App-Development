import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SignUp from './pages/authentication/signup';
import ForgotPassword from './pages/authentication/forgotPassword';
import MyAccount from './pages/authentication/myAccount';
import DashBoard from './pages/admin/dashboard';
import Login from './pages/authentication/login';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
  );
}

export default App;