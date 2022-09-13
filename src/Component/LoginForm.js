import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className=" bg-sky-300 w-[80%] m-[10%] rounded-3xl  pt-10 pb-10">
        <form
          className=""
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="pl-7">
            <h1 className="capitalize mb-2 tracking-wide text-lg">user name</h1>
            <input
              className="mb-3 p-1 pl-2 rounded-md outline-none "
              type="text"
            />
            <h1 className="capitalize mb-2 tracking-wide text-lg">Password</h1>
            <input
              className="mb-3 p-1 pl-2 rounded-md outline-none"
              type="text"
            />
          </div>
          <br />
          <div className="flex justify-center">
            <button className="mt-10 capitalize p-2 rounded-md tracking-wider w-40 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500">
              submit
            </button>
          </div>
          <br />
          <Link
            to="/create-user"
            className="underline underline-offset-2 m-3 mr-4 text-white text-lg"
          >
            Create user account
          </Link>
          <a href="#" className="underline underline-offset-2">
            Forgot Password
          </a>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
