import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const ForgotPassword = () => {
  const { userArray } = useGlobalContext();

  const [successMessage, setSucessMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [recoverPin, setRecoverPin] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPasswordFild, setShowPasswordFild] = useState(false);

  const refUserId = useRef();
  const refRecoverPin = useRef();
  const refPassword = useRef();
  const refRePassword = useRef();

  useEffect(() => {
    const user = userArray.find((item) => item.userId === userId);
    if (!user) {
      if (userId.length > 2) {
        refUserId.current.style.border = "2px solid red";
        return;
      }
      return;
    }
    refUserId.current.style.border = "2px solid rgb(125 211 252)";
    if (recoverPin === user.recoverPin) {
      setShowPasswordFild(true);
      return;
    }
    setShowPasswordFild(false);
  }, [userId, recoverPin]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (password.length === 0) {
      refPassword.current.style.border = "2px solid red";
      return;
    }

    if (password !== rePassword) {
      setPassword("");
      setRePassword("");
      refPassword.current.style.border = "2px solid red";
      refRePassword.current.style.border = "2px solid red";
      refPassword.current.focus();
      return;
    }

    const itemIndex = userArray.findIndex((item) => item.userId === userId);
    userArray[itemIndex].password = password;
    setUserId("");
    setRecoverPin("");
    setPassword("");
    setRePassword("");
    setSucessMessage("your password has been changed sucessfully!!");
    setShowPasswordFild(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    localStorage.setItem("userAccount", JSON.stringify(userArray));
  };
  const handelRecover = (e) => {
    setRecoverPin(e.target.value);
  };

  return (
    <div className="bg-sky-300 p-3 h-[500px]">
      <div>
        <Link to="/">
          <FaArrowLeft className="text-yellow-100 text-xl" />
        </Link>
        <div className="absolute top-3 left-12">
          <h1 className="text-center capitalize text-pink-600">
            {successMessage}
          </h1>
        </div>
      </div>
      <form action="" onSubmit={handelSubmit} className="mt-5 pl-5">
        <h1 className="capitalize mb-2 tracking-wide text-lg">user name:</h1>
        <input
          ref={refUserId}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
          type="text"
        />
        <h1 className="capitalize mb-2 tracking-wide text-lg">recover pin:</h1>
        <input
          ref={refRecoverPin}
          value={recoverPin}
          onChange={handelRecover}
          className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
          type="number"
        />
        {showPasswordFild ? (
          <>
            <h1 className="mb-2 capitalize">new password :</h1>
            <div className="flex">
              <input
                ref={refPassword}
                type={showPassword ? "text" : "password"}
                className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300 "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            <h1 className="mb-2 capitalize">enter same password :</h1>
            <div className="flex">
              <input
                ref={refRePassword}
                type={showPassword ? "text" : "password"}
                className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300 "
                value={rePassword}
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center -ml-5">
              <button className="mt-10 capitalize p-2 rounded-md tracking-wider w-40 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500">
                submit
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
