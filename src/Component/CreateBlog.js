import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { userArray, userIdentity } = useGlobalContext();

  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");

  const handleUpload = () => {
    userArray[userIdentity].blogData.unshift({
      heading: heading,
      date: getDate(),
      text: body,
    });
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

  return (
    <div className="bg-sky-300 p-7">
      <h1 className="capitalize mb-2 text-2xl">heading :-</h1>
      <input
        className="mb-3 p-1 pl-2  outline-none w-[100%] font-medium text-lg"
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
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
        onClick={handleUpload}
        className="uppercase p-2 rounded-md tracking-wider w-32 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
      >
        upload
      </button>
    </div>
  );
};

export default CreateBlog;
