import React, { useState } from "react";
import { useGlobalContext } from "./Contex";

const Home = () => {
  const { blogData } = useGlobalContext();

  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-sky-300 p-5">
      {blogData.map((item, index) => {
        const { heading, text } = item;
        return (
          <div key={index}>
            <h1 className="capitalize text-2xl font-medium text-white">
              {heading}
            </h1>
            <p>
              {`${readMore ? text : text.slice(0, 80)}`}
              <button
                className="text-white"
                onClick={(e) => {
                  setReadMore(!readMore);
                }}
              >
                {readMore ? "see less" : "...see mover"}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
