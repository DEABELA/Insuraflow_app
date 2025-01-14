import RegistrationForm from "./registration/RegistrationForm";
import LoginFrom from "./registration/LoginFrom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin/Admin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginFrom />} />
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
