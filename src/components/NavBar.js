import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cart } = useMyContext();
  return (
    <div className="p-2 shadow border-b-[1px] sticky top-0 z-[1000] bg-[#FFF]">
      <div className="flex justify-between items-center pt-3 px-5 md:px-10">
        <div className="flex space-x-6 items-center w-[60%]">
          <img
            className="w-12"
            src={require("../img/MR.Logo2.png")}
            alt="Logo"
          />
          <input
            type="search"
            placeholder="Search . . ."
            className="w-full h-10 rounded p-2 bg-gray-100"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Link to={"/shoppingcart"} className="relative">
            <RiShoppingBasketLine className="w-6 h-6 cursor-pointer" />
            {cart.length === 0 ? null : (
              <span className="absolute -right-[35%] top-1/2 bg-[#0082FD] min-w-[20px] min-h-[20px] rounded-full font-semibold text-white text-center text-sm">
                {cart.reduce((acc, cur) => acc + cur.qty, 0)}
              </span>
            )}
          </Link>
          <Link to={"/login"}>
            <FaRegUser className="w-5 h-5 cursor-pointer" />
          </Link>
          <FiMenu
            className="inline lg:hidden w-5 h-5 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      <nav className="list-none lg:flex justify-center items-center pt-5 space-x-14 hidden">
        <li>
          <Link
            className="hover:border-b-2 hover:border-b-red-500 pb-2"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 hover:border-b-red-500 pb-2"
            to={"/products"}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 hover:border-b-red-500 pb-2"
            to={"/"}
          >
            Phone
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 hover:border-b-red-500 pb-2"
            to={"/adminpanel"}
          >
            Admin
          </Link>
        </li>
      </nav>
      {showMenu === true ? (
        <nav>
          <ul className="pt-4 flex space-x-10 px-5 md:px-10 lg:hidden">
            <li>
              <Link
                className="hover:border-b-2 hover:border-b-red-500 pb-1"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-2 hover:border-b-red-500 pb-1"
                to={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-2 hover:border-b-red-500 pb-1"
                to={"/"}
              >
                Phone
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-2 hover:border-b-red-500 pb-1"
                to={"/adminpanel"}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default NavBar;
