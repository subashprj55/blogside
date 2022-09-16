import React, { useState } from "react";

const Blog = ({ heading, date, text, index }) => {
  const { weekday, day, month, year } = date;
  const [readMore, setReadMore] = useState(false);
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
    </div>
  );
};

export default Blog;
