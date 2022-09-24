import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const Setting = () => {
  const { userArray, userIdentity } = useGlobalContext();

  const [openUserName, setOpenUserName] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [message, setMessage] = useState("");

  const refOldPassword = useRef();
  const refNewPassword = useRef();
  const refReEnter = useRef();

  const submitUserName = () => {
    if (userName === "" && lastName === "") return;
    if (userName === "") {
      userArray[userIdentity].lastName = lastName;
      setLastName("");
      setMessage("Sucessfully change Last Name");
      localStorage.setItem("userAccount", JSON.stringify(userArray));
      return;
    }
    if (lastName === "") {
      userArray[userIdentity].name = userName;
      setUserName("");
      setMessage("Sucessfully change User Name");
      localStorage.setItem("userAccount", JSON.stringify(userArray));
      return;
    }
    userArray[userIdentity].name = userName;
    userArray[userIdentity].lastName = lastName;
    setUserName("");
    setLastName("");
    setMessage("Sucessfully change user & Last Name");
    localStorage.setItem("userAccount", JSON.stringify(userArray));
  };

  const submitChangePassword = () => {
    if (oldPassword !== userArray[userIdentity].password) {
      refOldPassword.current.style.borderBottom = "2px solid red";
      refOldPassword.current.focus();
      return;
    }
    if (newPassword === "") {
      defaultStyle();
      refNewPassword.current.focus();
      refNewPassword.current.style.borderBottom = "2px solid red";
      return;
    }
    if (newPassword !== reEnterPassword) {
      defaultStyle();
      refNewPassword.current.style.borderBottom = "2px solid red";
      refReEnter.current.style.borderBottom = "2px solid red";
      return;
    }
    defaultStyle();
    userArray[userIdentity].password = newPassword;
    localStorage.setItem("userAccount", JSON.stringify(userArray));
    setMessage("sucessfully change password");
    setOldPassword("");
    setNewPassword("");
    setReEnterPassword("");
  };

  const defaultStyle = () => {
    refOldPassword.current.style.borderBottom = "2px solid #ffff";
    refNewPassword.current.style.borderBottom = "2px solid #ffff";
    refReEnter.current.style.borderBottom = "2px solid #ffff";
  };

  useEffect(() => {
    const timmer = setTimeout(() => {
      setMessage("");
      return clearTimeout(timmer);
    }, 3000);
  }, [message]);

  return (
    <div className="bg-sky-300  p-3 min-h-screen ">
      <div>
        <Link to="/home">
          <FaArrowLeft className="text-yellow-100 text-xl" />
        </Link>
        <div className="absolute top-3 left-12">
          <h1 className="text-center capitalize text-pink-600">{message}</h1>
        </div>
      </div>
      <div className="p-4 ">
        <div className="flex items-center">
          <h1 className="mb-2 capitalize text-lg">change user name</h1>
          <input
            className="ml-2 h-4 w-4"
            type="checkbox"
            onClick={(e) => setOpenUserName(!openUserName)}
          />
        </div>
        <div
          className={`overflow-hidden pl-3 ${openUserName ? "h-auto" : "h-0"}`}
        >
          <h1 className="mb-1 capitalize text-base">new user name</h1>
          <input
            className="mb-3 outline-none bg-sky-300 pl-1 border-b-2"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h1 className="mb-1 capitalize text-base">last name</h1>
          <input
            className="mb-3 outline-none bg-sky-300 pl-1 border-b-2"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <button
            className=" capitalize p-2 rounded-md tracking-wider w-32 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
            onClick={submitUserName}
          >
            save
          </button>
        </div>

        <div className="flex items-center mt-3">
          <h1 className="mb-2 capitalize text-lg">change password</h1>
          <input
            className="ml-2 h-4 w-4"
            type="checkbox"
            onClick={(e) => setOpenPassword(!openPassword)}
          />
        </div>
        <div
          className={`${openPassword ? "h-auto" : "h-0"} overflow-hidden pl-3`}
        >
          <h1 className="mb-1 capitalize text-base">old password</h1>
          <input
            type="text"
            className="mb-3 outline-none bg-sky-300 pl-1 border-b-2"
            ref={refOldPassword}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <h1 className="mb-1 capitalize text-base">new password</h1>
          <div className="flex">
            <input
              ref={refNewPassword}
              type={showPassword ? "text" : "password"}
              className="mb-3 outline-none bg-sky-300 pl-1 border-b-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEye
                className=" text-lg ml-5"
                onClick={(e) => setShowPassword(false)}
              />
            ) : (
              <FaEyeSlash
                className="text-lg ml-5"
                onClick={(e) => setShowPassword(true)}
              />
            )}
          </div>
          <h1 className="mb-1 capitalize text-base">re-enter</h1>
          <input
            ref={refReEnter}
            type={showPassword ? "text" : "password"}
            className="mb-3 outline-none bg-sky-300 pl-1 border-b-2"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
          />
          <br />
          <button
            className=" capitalize p-2 rounded-md tracking-wider w-32 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
            onClick={submitChangePassword}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
