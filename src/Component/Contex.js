import React, { useState, useContext } from "react";

const AppContex = React.createContext();

const AppProvider = ({ children }) => {
  const userArray = getLocalStorage();
  const blogData = [
    {
      heading: "programming Life",
      text: "A programmer’s day-to-day life is generally spent reading code, fixing errors, and writing new pieces of code. Programming is a highly mentally demanding job as it requires constant problem-solving. In addition to these tasks, there are also meetings with other programmers and stakeholders in the project.The Good:Programmers have a high salary. They work in an industry that is growing rapidly and as an added bonus, they work on some of the most challenging problems in society today.The Ugly: Programmers are faced with long hours, irregular deadlines, and tight deadlines for projects. They’re often exposed to high levels of stress and many other detrimental factors that come with being a computer programmer.",
    },
    {
      heading: "frontEnd developar",
      text: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.",
    },
  ];

  return (
    <AppContex.Provider value={{ userArray, blogData }}>
      {children}
    </AppContex.Provider>
  );
};

const getLocalStorage = () => {
  let item = localStorage.getItem("userAccount");
  if (item) {
    return (item = JSON.parse(localStorage.getItem("userAccount")));
  }
  return [];
};

export const useGlobalContext = () => {
  return useContext(AppContex);
};
export { AppProvider };
