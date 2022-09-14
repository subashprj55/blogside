import React from "react";
import { useGlobalContext } from "./Contex";

const Home = () => {
  const { userArray } = useGlobalContext;
  return (
    <div>
      <h1 className="text-center text-4xl mt-5">{`surprice fucker -> `}</h1>
    </div>
  );
};

export default Home;
