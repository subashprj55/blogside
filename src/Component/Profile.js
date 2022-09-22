import React, { useState, useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";

const Profile = () => {
  /////////////////
  const [imageUrls, setImageUrls] = useState(null);
  const onImageChange = (e) => {
    setImageUrls(URL.createObjectURL(e.target.files[0]));
  };
  //   console.log(typeof imageUrls);

  ///////////////
  return (
    <div className="bg-sky-300 pt-10 min-h-screen">
      <div className="ml-10">
        {imageUrls === null ? (
          <FcBusinessman className="h-56 w-56 bg-zinc-600 mb-3" />
        ) : (
          <img
            src={imageUrls}
            alt="your photo"
            className="mb-3 h-56 w-56 object-cover"
          />
        )}

        {/* ////////////////////////////////// */}

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
