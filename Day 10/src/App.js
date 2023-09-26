import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from './pages/authentication/signup';
import ForgotPassword from './pages/authentication/forgotPassword';
import MyAccount from './pages/authentication/myAccount';
import DashBoard from './pages/admin/dashboard';
import Login from './pages/authentication/login';
import TermsAndConditions from './pages/support/terms';
import PrivacyPolicy from './pages/support/privacy';
import AddPetInfo from './pages/pets/addpet/addpetinfo';
import AddPetMedicalInfo from './pages/pets/addpet/addpetmedi';
import PetPage1 from './pages/pets/adopt/petpage1';
import PetPage2 from './pages/pets/adopt/petpage2';
import AllPets from './pages/pets/adopt/allpets';
import FAQ from './pages/support/FAQ';
import NewHome from './pages/newHome';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/newpet' element={<AddPetInfo />} />
          <Route path='/newpetmedi' element={<AddPetMedicalInfo />} />
          <Route path='/allpets' element={<AllPets />} />
          <Route path='/pet1' element={<PetPage1 />} />
          <Route path='/pet2' element={<PetPage2 />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </Router>
      <ToastContainer />
      </>
  );
}

export default App;