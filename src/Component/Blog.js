import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Contex";
import { BsHeartFill } from "react-icons/bs";
import { TbDots } from "react-icons/tb";

const Blog = ({ heading, date, text, index, setUpdate, update }) => {
  const { userArray, userIdentity, setEditIndex, setIsEditing } =
    useGlobalContext();

  const navigate = useNavigate();
  const { weekday, day, month, year } = date;
  const [readMore, setReadMore] = useState(false);
  const [like, setLike] = useState(false);
  const [scale, setScale] = useState(false);
  const [showOption, setShowOpetion] = useState(false);

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

  useEffect(() => {
    if (like) {
      const timmer = setTimeout(() => {
        setScale(!scale);
        return clearTimeout(timmer);
      }, 1000);
    }
  }, [scale, like]);

  return (
    <div className="bg-sky-300 mb-7 p-2 drop-shadow-xl md:relative md:min-h-[150px] overflow-hidden">
      <div className="flex justify-between ">
        <h1 className="capitalize text-2xl font-medium text-white ">
          {heading}
        </h1>
        <div className="flex md:mr-5">
          <BsHeartFill
            onClick={(e) => setLike(!like)}
            className={`text-2xl mr-1 ${
              like ? "text-red-600" : "text-white scale-90"
            } ${scale ? "scale-125" : ""} duration-1000 md:mr-3`}
          />
          <TbDots
            className={`hidden md:block text-2xl ${
              showOption ? "text-white" : ""
            }`}
            onClick={(e) => setShowOpetion(!showOption)}
          />
        </div>
      </div>
      <div className="flex mb-3 text-sm">
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
      {(readMore || text.length < 80 || window.screen.width > 768) && (
        <div
          className={`flex mt-2 md:absolute md:right-0 md:bg-white md:inline-block md:top-7 md:h-[80%] ${
            showOption ? "" : "md:translate-x-[100%]"
          } md:duration-300`}
        >
          <button
            className=" mr-2 capitalize p-2 rounded-md tracking-wider w-28 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 md:bg-transparent md:hover:bg-transparent md:border-b-2 md:border-black md:rounded-none md:ml-2 md:hover:text-[17px] md:duration-200"
            onClick={handelUpdate}
          >
            Update
          </button>
          <br />
          <button
            className=" mr-2 capitalize p-2 rounded-md tracking-wider w-28 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 md:bg-transparent md:hover:bg-transparent md:ml-2 md:hover:text-[17px]"
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
