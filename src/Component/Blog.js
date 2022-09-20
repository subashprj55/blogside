import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const Blog = ({ heading, date, text, index, setUpdate, update }) => {
  const { userArray, userIdentity, setEditIndex, setIsEditing } =
    useGlobalContext();

  const navigate = useNavigate();
  const { weekday, day, month, year } = date;
  const [readMore, setReadMore] = useState(false);

  const handelUpdate = () => {
    setEditIndex(index);
    setIsEditing(true);

    navigate("/create-blog");
  };
  const handelDelete = () => {
    userArray[userIdentity].blogData.splice(index, 1);
    setUpdate(update + 1);
    localStorage.setItem("userAccount", JSON.stringify(userArray));
  };

  return (
    <div className="bg-sky-300 mb-7 p-2 drop-shadow-xl">
      <h1 className="capitalize text-2xl font-medium text-white ">{heading}</h1>
      <div className="flex mb-3">
        <p className="font-mono font-light">{weekday}</p>
        <p className=" font-mono font-light mr-1">-{day}</p>
        <p className=" font-mono font-light mr-1">{month}</p>
        <p className=" font-mono font-light">{year}</p>
      </div>
      <p>
        {" "}
        {`${readMore ? text : text.slice(0, 80)}`}
        {text.length > 80 && (
          <button
            className="text-white"
            onClick={(e) => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "see less" : "...see mover"}
          </button>
        )}
      </p>
      {(readMore || text.length < 80) && (
        <div className="flex mt-2">
          <button
            className=" mr-2 capitalize p-2 rounded-md tracking-wider w-28 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
            onClick={handelUpdate}
          >
            Update
          </button>
          <button
            className=" mr-2 capitalize p-2 rounded-md tracking-wider w-28 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
            onClick={handelDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
