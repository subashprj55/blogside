import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Component/Contex";
const CreateUser = () => {
  const { userArray } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [recoverPin, setRecoverPin] = useState("");

  const [successMessage, setSucessMessage] = useState("");

  const refPassword = useRef();
  const refUser = useRef();
  const refLastName = useRef();
  const refUserId = useRef();
  const refRePassword = useRef();
  const refAddress = useRef();
  const refPhone = useRef();
  const refRecoverPin = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (userName.length === 0) {
      refUser.current.style.border = "2px solid red";
      refUser.current.focus();
      return;
    }
    if (lastName.length === 0) {
      setDefault();
      refLastName.current.style.border = "2px solid red";
      refLastName.current.focus();
      return;
    }
    if (userId.length === 0) {
      setDefault();
      refUserId.current.style.border = "2px solid red";
      refUserId.current.focus();
      return;
    }
    if (password.length === 0) {
      setDefault();
      refPassword.current.style.border = "2px solid red";
      refPassword.current.focus();
      return;
    }
    if (rePassword.length === 0) {
      setDefault();
      refRePassword.current.style.border = "2px solid red";
      refRePassword.current.focus();
      return;
    }
    if (address.length === 0) {
      setDefault();
      refAddress.current.style.border = "2px solid red";
      refAddress.current.focus();
      return;
    }
    if (phoneNo.length !== 10) {
      setDefault();
      refPhone.current.style.border = "2px solid red";
      refPhone.current.focus();
      return;
    }
    if (address.length === 0) {
      setDefault();
      refAddress.current.style.border = "2px solid red";
      refAddress.current.focus();
      return;
    }
    if (recoverPin.length === 0) {
      setDefault();
      refRecoverPin.current.style.border = "2px solid red";
      refRecoverPin.current.focus();
      return;
    }

    if (password !== rePassword) {
      setDefault();
      setPassword("");
      setRePassword("");
      refPassword.current.style.border = "2px solid red";
      refRePassword.current.style.border = "2px solid red";
      refPassword.current.focus();
      return console.log("password doesnot match");
    }
    setDefault();
    console.log("password match");
    userArray.push({
      name: userName,
      lastName: lastName,
      userId: userId,
      password: password,
      address: address,
      phoneNo: phoneNo,
      recoverPin: recoverPin,
    });

    console.log(userArray);
    clearAllText();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setSucessMessage("your account has been created sucessfully!!");
    localStorage.setItem("userAccount", JSON.stringify(userArray));
    // removeSucessMessage();
  };

  //   const removeSucessMessage = () => {
  //     const timer = setTimeout(() => {
  //       setSucessMessage("");
  //     }, 3000);
  //   };
  const setDefault = () => {
    refLastName.current.style.border = "2px solid rgb(125 211 252)";
    refPassword.current.style.border = "2px solid rgb(125 211 252)";
    refRePassword.current.style.border = "2px solid rgb(125 211 252)";
    refAddress.current.style.border = "2px solid rgb(125 211 252)";
    refPhone.current.style.border = "2px solid rgb(125 211 252)";
    refRecoverPin.current.style.border = "2px solid rgb(125 211 252)";
  };
  const clearAllText = () => {
    setUserName("");
    setLastName("");
    setUserId("");
    setPassword("");
    setRePassword("");
    setAddress("");
    setPhoneNo("");
    setRecoverPin("");
  };

  // useEffect(() => {
  //   localStorage.setItem("userAccount", JSON.stringify(userArray));
  // }, [userArray]);

  return (
    <div className="bg-sky-300 p-3">
      <div>
        <Link to="/">
          <FaArrowLeft
            className="text-yellow-100 text-xl"
            onClick={clearAllText}
          />
        </Link>

        <div className="absolute top-3 left-16">
          <h1 className="text-center capitalize text-yellow-800">
            {successMessage}
          </h1>
        </div>
      </div>
      {/* creating form */}
      <form action="" onSubmit={handelSubmit}>
        <div className="mt-5 pl-5">
          <h1 className="mb-2 capitalize">first name :</h1>
          <input
            ref={refUser}
            type="text"
            className="mb-3 p-1 pl-2 rounded-md outline-none capitalize border-2 border-sky-300"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <h1 className="mb-2 capitalize">last name :</h1>
          <input
            ref={refLastName}
            type="text"
            className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300 capitalize"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <h1 className="mb-2 capitalize">user id :</h1>
          <input
            ref={refUserId}
            type="text"
            className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
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
          <h1 className="mb-2 capitalize">address :</h1>
          <input
            ref={refAddress}
            type="text"
            className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300 "
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <h1 className="mb-2 capitalize">phone number :</h1>
          <input
            placeholder="10-digit"
            ref={refPhone}
            type="number"
            className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300 "
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
          <h1 className="mb-2 capitalize">password recover pin :</h1>
          <input
            ref={refRecoverPin}
            type="number"
            className="mb-3 p-1 pl-2 rounded-md outline-none border-2 border-sky-300 "
            value={recoverPin}
            onChange={(e) => {
              setRecoverPin(e.target.value);
            }}
          />
          <br />
          <div className="flex justify-center -ml-5">
            <button className="mt-10 capitalize p-2 rounded-md tracking-wider w-40 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
