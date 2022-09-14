import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const LoginForm = ({ setLogIn }) => {
  const { userArray } = useGlobalContext();
  // console.log(userArray);
  //   useEffect(() => {
  //     setLogIn(true);
  //   }, []);

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
    setLogIn(true);
  };

  const showError = () => {
    refUserId.current.style.border = "2px solid red";
    refPassword.current.style.border = "2px solid red";
    refUserId.current.focus();
    setErrorMessage("(invalid user id and password)");
  };
  return (
    <>
      <div className=" bg-sky-300 pr-[10%] pl-[10%] h-[500px] pt-10 pb-10">
        <form className="" action="" onSubmit={checkLogIN}>
          <div className="pl-7">
            <h1 className="capitalize mb-2 tracking-wide text-lg">user name</h1>
            <input
              ref={refUserId}
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
              type="text"
            />
            <h1 className="capitalize mb-2 tracking-wide text-lg">Password</h1>
            <input
              ref={refPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
              type="text"
            />
            <h1 className="capitalize text-red-500 h-6">{errorMwssage}</h1>
          </div>
          <br />
          <div className="flex justify-center">
            <button className="mt-6 -ml-2 capitalize p-2 rounded-md tracking-wider w-40 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500">
              log in
            </button>
          </div>
          <br />
          <Link
            to="/create-user"
            className="underline underline-offset-2  text-red-500 text-lg"
          >
            sign in
          </Link>
          <br />
          <Link to="/forgot-password" className="underline underline-offset-2">
            Forgot Password?
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
