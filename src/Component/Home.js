import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { useGlobalContext } from "./Contex";

const Home = () => {
  const { userArray, userIdentity } = useGlobalContext();
  const [update, setUpdate] = useState(0);
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <div className="bg-yellow-400 p-2 ">
        <div className="flex justify-between">
          <div className="flex items-center pl-5">
            <p className="text-xl capitalize tracking-wide">
              {userArray[userIdentity].name}
            </p>
          </div>
          <div className="flex">
            <Link to={"/create-blog"}>
              <h1 className="capitalize p-[5px] mr-2 bg-[#f1f1f1] rounded-2xl">
                create note
              </h1>
            </Link>
            <div className="flex items-center">
              <div>
                <FaTasks
                  className={`mr-5 text-xl ${openSideBar ? "text-white" : ""}`}
                  onClick={(e) => setOpenSideBar(!openSideBar)}
                />
                <div
                  className={`absolute z-50 right-0 mt-4 pb-4 bg-white ${
                    openSideBar ? "w-[50%]" : "w-[0%]"
                  }  pl-5 duration-500`}
                >
                  <Link to={"/"}>
                    <button className="capitalize text-lg border-b-2 border-black w-[100%] pb-2 pt-2">
                      logout
                    </button>
                  </Link>
                  <br />
                  <button className="capitalize text-lg  border-b-2 border-black w-[100%] pb-2 pt-2">
                    setting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        {userArray[userIdentity].blogData.length === 0 ? (
          <h1 className="bg-red-300 mb-7 p-2 drop-shadow-xl">
            There is no any Note.... <br />
            Please click on the{" "}
            <span className="bg-[#f1f1f1] rounded-2xl pl-[5px] pr-[5px] pb-1 capitalize">
              create note
            </span>{" "}
            button☝☝☝
          </h1>
        ) : (
          userArray[userIdentity].blogData.map((item, index) => {
            return (
              <Blog
                key={index}
                {...item}
                index={index}
                setUpdate={setUpdate}
                update={update}
              />
            );
          })
        )}
        {/* {blogData.map((item, index) => {
          return <Blog key={index} {...item} index={index} />;
        })} */}
      </div>
    </>
  );
};

export default Home;
