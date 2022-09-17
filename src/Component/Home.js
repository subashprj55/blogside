import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { useGlobalContext } from "./Contex";

const Home = () => {
  const { userArray, userIdentity } = useGlobalContext();
  console.log(userArray);

  const [unmber, setNumber] = useState(0);
  return (
    <>
      {setNumber === 0 && setNumber(1)}
      <div className="bg-yellow-400 p-2 ">
        <div className="flex justify-end">
          <Link to={"/create-blog"}>
            <h1 className="capitalize p-1 mr-5 bg-white rounded-3xl">
              new blog
            </h1>
          </Link>
        </div>
      </div>
      <div className=" p-5">
        {userArray[userIdentity].blogData.length === 0 ? (
          <h1>There is no any blog...</h1>
        ) : (
          userArray[userIdentity].blogData.map((item, index) => {
            return <Blog key={index} {...item} index={index} />;
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
