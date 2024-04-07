import RegistrationForm from "./registration/RegistrationForm";
import LoginFrom from "./registration/LoginFrom";
import Renew from "./Pages/Renewal/renew";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin/Admin";
import ClaimFront from "./Pages/claim/ClaimFront";
import ClaimForm from "./Pages/claim/ClaimForm";
import PolicyDetails from "./Pages/Renewal/Policy_details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginFrom />} />
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/claim" element={<ClaimFront />} />
      <Route path="/claim form" element={<ClaimForm />} />
      <Route path="/renew" element={<Renew />} />
      <Route path="/PolicyDetails" element={<PolicyDetails />} />

    </Routes>
  );
}

export default App;
