import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Contex";

const Profile = () => {
  const { userArray, userIdentity } = useGlobalContext();

  const [rerander, setRerender] = useState(0);
  const onImageChange = (e) => {
    userArray[userIdentity].photo = URL.createObjectURL(e.target.files[0]);
    localStorage.setItem("userAccount", JSON.stringify(userArray));
    setRerender(rerander + 1);
  };

  return (
    <div className="bg-sky-300 p-3 min-h-screen">
      <div>
        <Link to="/home">
          <FaArrowLeft className="text-yellow-100 text-xl" />
        </Link>
      </div>
      <div className="ml-10 mt-3">
        {"photo" in userArray[userIdentity] ? (
          <img
            src={userArray[userIdentity].photo}
            alt="your photo"
            className="mb-3 h-56 w-56 object-cover"
          />
        ) : (
          <FcBusinessman className="h-56 w-56 bg-zinc-600 mb-3" />
        )}

        <label
          htmlFor="filePicker"
          className="uppercase p-2 rounded-md tracking-wider w-32 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
        >
          Change Photo
        </label>
        <input
          className="hidden"
          type="file"
          id="filePicker"
          accept="image/*"
          onChange={onImageChange}
        />
      </div>
    </div>
  );
};

export default Profile;
