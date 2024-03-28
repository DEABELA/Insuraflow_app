import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const LoginButton = () => {
  // Your login button component JSX
  return (
    <button
      className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Login/signup
    </button>
  );
};

const NavBar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "All Services" },
    { id: 2, text: "Renewal" },
    { id: 3, text: "claims" },
    { id: 4, text: "support" },
    { id: 5, text: <LoginButton /> },
  ];

  return (
    <div className="bg-[#ffffff] flex justify-between items-center h-24  mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full items-center text-3xl px-8 md:px-32 font-bold text-[#264A9F]">
        REACT.
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:gap-5 flex-1 ml-auto md:items-center md:px-32 ">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 cursor-pointer whitespace-nowrap  font-medium text-[20px] leading-7 text-[#264A9F]"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden ">
        {nav ? (
          <AiOutlineClose size={20} color="#264A9F" />
        ) : (
          <AiOutlineMenu size={20} color="#264A9F" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r  bg-[#ffffff] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#264A9F] m-4 ">REACT</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-md text-[#264A9F] cursor-pointer"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
