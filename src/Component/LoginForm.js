import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const LoginForm = () => {
  const { userArray, setUserIdentity, userIdentity } = useGlobalContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (userIdentity !== null) {
      navigate("/home");
    }
  }, []);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMwssage, setErrorMessage] = useState("");

  const refUserId = useRef();
  const refPassword = useRef();

  const checkLogIN = (e) => {
    e.preventDefault();
    if (userId.length === 0) {
      refUserId.current.style.border = "2px solid red";
      refUserId.current.focus();
      return;
    }
    if (password.length === 0) {
      refUserId.current.style.border = "2px solid rgb(125 211 252)";
      refPassword.current.style.border = "2px solid red";
      refPassword.current.focus();
      return;
    }
    refUserId.current.style.border = "2px solid rgb(125 211 252)";
    refPassword.current.style.border = "2px solid rgb(125 211 252)";
    findUserId();
  };

  const findUserId = () => {
    const currentUser = userArray.find(
      (item) => item.userId === userId && item.password === password
    );
    if (!currentUser) {
      showError();
      return;
    }
    setErrorMessage("");
    setUserIdentity(findIndex());
    navigate("/home");
  };
  const findIndex = () => {
    const index = userArray.findIndex(
      (item) => item.userId === userId && item.password === password
    );
    localStorage.setItem("userIdentity", JSON.stringify(index));
    return index;
  };

  const showError = () => {
    refUserId.current.style.border = "2px solid red";
    refPassword.current.style.border = "2px solid red";
    refUserId.current.focus();
    setErrorMessage("(invalid user id and password)");
  };

  const clearLocalStorage = () => {
    console.log(userArray);
    while (userArray.length > 0) {
      userArray.pop();
    }
    localStorage.setItem("userAccount", JSON.stringify(userArray));
    console.log(userArray);
  };

  return (
    <>
      {/* <div className="hidden md:block mt-10">
        <h1 className="text-center text-3xl">Working on big screen..... </h1>
        <h1 className="text-center text-xl underline underline-offset-2">
          PLEASE! tryout from mobile..
        </h1>
      </div> */}
      <div className=" bg-sky-300 pr-[10%] pl-[10%] min-h-screen pt-10 pb-10 flex justify-center">
        <form
          className=" md:w-[35%] md:rounded-lg relative overflow-hidden"
          action=""
          onSubmit={checkLogIN}
        >
          <div className="md:pt-5 md:pb-5 h-full md:bg-white">
            <div className="md:flex md:justify-center">
              <div className="pl-7">
                <h1 className="capitalize mb-2 tracking-wide text-lg">
                  user name
                </h1>
                <input
                  ref={refUserId}
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                  className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
                  type="text"
                />
                <h1 className="capitalize mb-2 tracking-wide text-lg">
                  Password
                </h1>
                <input
                  ref={refPassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
                  type="text"
                />
                <h1 className="capitalize text-red-500 h-6">{errorMwssage}</h1>
              </div>
            </div>
            <br />
            <div className="flex justify-center">
              <button className="mt-6 -ml-2 capitalize p-2 rounded-md tracking-wider w-40 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500">
                log in
              </button>
            </div>
            <br />
            <div className="md:flex md:justify-center">
              <div className="md:w-40">
                <Link
                  to="/create-user"
                  className="underline underline-offset-2  text-red-500 text-lg "
                >
                  sign up
                </Link>
                <br />
                <Link
                  to="/forgot-password"
                  className="underline underline-offset-2 "
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </form>
        {/* <button className="p-2 bg-yellow-300 " onClick={clearLocalStorage}>
          clear localStorage
        </button> */}
      </div>
    </>
  );
};

export default LoginForm;
