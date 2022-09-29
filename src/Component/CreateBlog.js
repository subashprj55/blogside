import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useGlobalContext } from "./Contex";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { userArray, userIdentity, editIndex, isEditing, setIsEditing } =
    useGlobalContext();

  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    if (isEditing) {
      userArray[userIdentity].blogData[editIndex].heading = heading;
      userArray[userIdentity].blogData[editIndex].text = body;
      setIsEditing(false);
      updateLocalStorage();
      return;
    }
    userArray[userIdentity].blogData.unshift({
      heading: heading,
      date: getDate(),
      text: body,
    });
    updateLocalStorage();
  };
  const updateLocalStorage = () => {
    localStorage.setItem("userAccount", JSON.stringify(userArray));
    navigate("/home");
  };
  const getDate = () => {
    const today = new Date();
    return {
      weekday: today.toLocaleString("default", { weekday: "long" }),
      day: today.getDate(),
      month: today.toLocaleString("default", { month: "short" }),
      year: today.getFullYear(),
    };
  };
  useEffect(() => {
    if (isEditing && heading === "" && body === "") {
      setHeading(userArray[userIdentity].blogData[editIndex].heading);
      setBody(userArray[userIdentity].blogData[editIndex].text);
    }
  });

  return (
    <div className="bg-sky-300 min-h-screen p-3 md:p-5">
      <div>
        <Link to="/home">
          <FaArrowLeft className="text-yellow-100 text-xl" />
        </Link>
      </div>
      <form action="" onSubmit={handleUpload} className="p-4 md:m-5">
        <h1 className="capitalize mb-2 text-2xl">heading :-</h1>
        <input
          className="mb-3 p-1 pl-2  outline-none w-[100%] font-medium text-lg"
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          required
        />
        <h1 className="capitalize mb-2 text-xl ">body :-</h1>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-[100%] outline-none p-1 pl-2 mb-3"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          className={`${
            isEditing ? "text-green-500" : ""
          } uppercase p-2 rounded-md tracking-wider w-32 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500`}
        >
          {isEditing ? "update" : "upload"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
