import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSamePassword, setShowSamePassword] = useState(false);
  return (
    <div className="bg-sky-300 p-3">
      <div className="">
        <Link to="/">
          <FaArrowLeft className="text-yellow-100 text-xl" />
        </Link>
      </div>
      {/* creating form */}
      <div className="mt-5 pl-5">
        <h1 className="mb-2 capitalize">user name</h1>
        <input type="text" className="mb-3 p-1 pl-2 rounded-md outline-none " />
        <h1 className="mb-2 capitalize">last name</h1>
        <input type="text" className="mb-3 p-1 pl-2 rounded-md outline-none " />
        <h1 className="mb-2 capitalize">password</h1>
        <div className="flex">
          <input
            type={showPassword ? "password" : "text"}
            className="mb-3 p-1 pl-2 rounded-md outline-none "
          />
          {showPassword ? (
            <FaEye
              className=" pt-2 text-2xl ml-5"
              onClick={(e) => {
                setShowPassword(false);
              }}
            />
          ) : (
            <FaEyeSlash
              className=" pt-2 text-2xl ml-5"
              onClick={(e) => {
                setShowPassword(true);
              }}
            />
          )}
        </div>
        <h1 className="mb-2 capitalize">same password</h1>
        <div className="flex">
          <input
            type={showSamePassword ? "password" : "text"}
            className="mb-3 p-1 pl-2 rounded-md outline-none "
          />
          {showSamePassword ? (
            <FaEye
              className=" pt-2 text-2xl ml-5"
              onClick={(e) => {
                setShowSamePassword(false);
              }}
            />
          ) : (
            <FaEyeSlash
              className=" pt-2 text-2xl ml-5"
              onClick={(e) => {
                setShowSamePassword(true);
              }}
            />
          )}
        </div>
        <h1 className="mb-2 capitalize">address</h1>
        <input type="text" className="mb-3 p-1 pl-2 rounded-md outline-none " />
        <h1 className="mb-2 capitalize">phone number</h1>
        <input type="text" className="mb-3 p-1 pl-2 rounded-md outline-none " />
        <h1 className="mb-2 capitalize">password recover number</h1>
        <input type="text" className="mb-3 p-1 pl-2 rounded-md outline-none " />
        <br />
        <div className="flex justify-center -ml-5">
          <button className="mt-10 capitalize p-2 rounded-md tracking-wider w-40 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
