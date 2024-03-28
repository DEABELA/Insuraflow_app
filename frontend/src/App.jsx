import RegistrationForm from "../src/Pages/registration/RegistrationForm";
import LoginFrom from "../src/Pages/registration/LoginFrom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin/Admin";
import ClaimFront from "./Pages/claim/ClaimFront";
import ClaimForm from "./Pages/claim/ClaimForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginFrom />} />
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/claim" element={<ClaimFront />} />
      <Route path="/claim form" element={<ClaimForm />} />
    </Routes>
  );
}

export default App;
