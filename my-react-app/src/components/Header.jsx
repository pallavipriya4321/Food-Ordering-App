import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, Links } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between border-1 border-gray-300 bg-white shadow-lg shadow-gray-200 mb-1 sticky w-full top-0 left-0 z-99 right-0">
      <div className="w-20 h-20 flex justify-center items-center ">
        <img src={logo} alt="logo" className=""></img>
      </div>
      <div className="flex flex-row gap-5 px-10 m-2 items-center">
        <h1 className="text-xl">{isOnline ? "🟢Online" : "🔴Offline"}</h1>
        <h1 className="text-xl">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="text-xl">
          <Link to="/about">About Us</Link>
        </h1>
        <h1 className="text-xl">
          <Link to="/contact">Contacts</Link>
        </h1>
        <h1 className="text-xl">
          <Link to="/cart">Cart</Link>
        </h1>
        <button
          className="bg-orange-500 text-white hover:bg-orange-600 hover:text-white hover:cursor-pointer font-semibold py-2 px-4 rounded"
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          {login}
        </button>
      </div>
    </div>
  );
};
export default Header;
