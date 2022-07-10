import React from "react";
import useTitle from "../hooks/useTitle";
import { AiOutlineHeart } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const UserProfile = () => {
  useTitle("Profile");
  return (
    <div className="min-h-screen w-full bg-slate-100 py-10">
      <div className="container grid grid-cols-4 lg:space-x-4">
        <div className="lg:col-span-1 col-span-4 border shadow-sm mb-6 p-4 rounded-lg max-h-[250px] bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                className="w-[60px] min-h-[60px]"
                src={require("../img/man.png")}
                alt="user-photo"
              />
              <p>Abas Boazar</p>
            </div>
            <BiEditAlt className="text-lg text-blue-900 cursor-pointer" />
          </div>
          <hr className="my-5" />
          <div className="space-y-5">
            <div className="flex items-center space-x-4 cursor-pointer">
              <AiOutlineHeart className="text-2xl" />
              <Link to={"favorites"}>Favorites</Link>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer">
              <img
                className="w-[25px] min-h-[25px]"
                src={require("../img/clipboard.png")}
                alt="clipboard"
              />
              <Link to={"orders"}>Orders</Link>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer">
              <MdExitToApp className="text-2xl" />
              <Link to={"/login"}>Exit</Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-4 border shadow-sm p-4 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
