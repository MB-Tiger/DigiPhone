import React, { useState, useEffect } from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";
import validate from "./validate";
import { Link } from "react-router-dom";

const SignUp = () => {
  useTitle("Sign Up");
  const { userData, setUserData } = useMyContext();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(userData));
    // console.log(errors);
  }, [userData, touched]);
  //   console.log(userData);
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };
  console.log(touched);
  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 py-6">
      <div className="max-w-sm min-h-[400px] bg-white rounded-sm shadow mx-auto p-8">
        <h2 className="mb-5 text-xl font-semibold text-blue-900">Sign Up</h2>
        <label className="block mb-5">
          <span className="inline-block mb-[6px]">Name</span>
          <input
            className="bg-gray-100 rounded-sm block w-full h-8 p-2"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            onFocus={() => setTouched({ ...touched, name: true })}
            type="text"
          />
          {errors.name && touched.name == true ? (
            <span className="text-red-900 text-xs">{errors.name}</span>
          ) : null}
        </label>
        <label className="block mb-5">
          <span className="inline-block mb-[6px]">Email</span>
          <input
            className="bg-gray-100 rounded-sm block w-full h-8 p-2"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            onFocus={() => setTouched({ ...touched, email: true })}
            type="text"
          />
          {errors.email && touched.email == true ? (
            <span className="text-red-900 text-xs">{errors.email}</span>
          ) : null}
        </label>
        <label className="block mb-5">
          <span className="inline-block mb-[6px]">Password</span>
          <input
            className="bg-gray-100 rounded-sm block w-full h-8 p-2"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            onFocus={() => setTouched({ ...touched, password: true })}
            type="password"
          />
          {errors.password && touched.password == true ? (
            <span className="text-red-900 text-xs">{errors.password}</span>
          ) : null}
        </label>
        <label className="block mb-5">
          <span className="inline-block mb-[6px]">Confirm password</span>
          <input
            className="bg-gray-100 rounded-sm block w-full h-8 p-2"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
            onFocus={() => setTouched({ ...touched, confirmPassword: true })}
            type="password"
          />
          {errors.confirmPassword && touched.confirmPassword == true ? (
            <span className="text-red-900 text-xs">
              {errors.confirmPassword}
            </span>
          ) : null}
        </label>
        <label className="block space-x-2 mb-10">
          <input
            className="bg-gray-100 rounded-sm align-middle"
            value={userData.isAccepted}
            onChange={(e) =>
              setUserData({ ...userData, isAccepted: e.target.checked })
            }
            type="checkbox"
          />
          <span className="text-sm">I accept the terms of privacy policy</span>
        </label>
        <Link to={"/userprofile/orders"}>
          <button
            type="submit"
            className="w-full bg-red-500 transition-all hover:bg-red-600 mx-auto rounded text-white py-1"
            onSubmit={() => sumbitHandler()}
          >
            Sign Up
          </button>
        </Link>
        <div className="flex justify-between items-baseline mt-3">
          <span className="text-sm">Already have an Account?</span>
          <Link to={"/login"}>
            <button className="py-1 px-2 rounded transition-all hover:bg-[#0082FD] hover:text-white duration-200">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
