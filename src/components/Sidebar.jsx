import React, { useEffect, useState } from "react";
import logo from "../assets/CPE Discord Logo.png";
import chevronRight from "../assets/chevron-right.svg";
import { GetStarted, DataStruc, Algo } from "../utils/sidebarContents";

const Sidebar = ({ onSubContentClick }) => {
  const [isSelected, setIsSelected] = useState(null);
  const [selectedSubContent, setSelectedSubContent] = useState(null);

  // console.log(selectedSubContent);

  useEffect(() => {
    const storedSubContent = localStorage.getItem("selectedSubContent");
    if (storedSubContent) {
      setSelectedSubContent(storedSubContent);
      onSubContentClick(storedSubContent);
    }
  }, []);

  const handleTitleClick = (title) => {
    setIsSelected(isSelected === title ? null : title);
    setSelectedSubContent(null);
  };

  const handleSubContentClick = (subContents) => {
    if (subContents === "Data Structures and Algorithm") {
      setIsSelected(null);
      setSelectedSubContent(null);
      localStorage.removeItem("selectedSubContent");
    } else {
      setSelectedSubContent(subContents);
      onSubContentClick(subContents);
      localStorage.setItem("selectedSubContent", subContents);
      window.history.pushState(null, null, "/");
    }
  };

  return (
    <nav>
      <div className="flex">
        <div
          className={`scrollbar-thin scrollbar-track-transparent w-72 bg-[#F6F8F9] pt-8 relative h-screen overflow-x-hidden overflow-y-auto duration-300 pb-14`}
        >
          <div className="flex gap-x-2 px-5 items-center">
            <img
              src={logo}
              className={`w-7 h-7 cursor-pointer duration-[650ms] rounded`}
            />
            <h1 className={`font-bold text-[18px] text-[#1A2024] duration-300`}>
              CpE
            </h1>
            <h4
              className={`text-[#252C32] font-semibold text-[14px] bg-[#E5E9EB] absolute right-3 py-[0.50px] px-2 rounded-md tracking-[0.018em]`}
            >
              v1.0.0
            </h4>
          </div>

          {/* p-5 pt-8 */}
          <div className="relative flex pl-2 pt-5">
            <div className="flex-grow border-t border-[#E5E9EB]"></div>
          </div>

          <div className="ml-4 mr-2 mt-5">
            <p
              className="text-center bg-[#DDE2E4] hover:bg-[#EEF0F2] duration-300 rounded-[3px] py-1 px-3 text-[#252C32] font-semibold text-[14px] cursor-pointer"
              onClick={() => handleSubContentClick()}
            >
              Data Structures and Algorithm
            </p>
          </div>

          {/* Get Started */}
          <ul className="pt-6 px-5">
            <h3
              className={`text-[#84919A] font-semibold text-[12px] pl-7 uppercase tracking-[0.018em]`}
            >
              Get Started
            </h3>
            {GetStarted.map((struct, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-[#EEF0F2] duration-300 text-sm items-center gap-x-4 ${
                  index === 0 && "bg-light-white"
                }`}
                onClick={() => handleSubContentClick(struct.title)}
              >
                <img src={chevronRight} />
                <span
                  className={`font-semibold text-[#252C32] text-[14px] leading-5 tracking-[-0.006em] origin-left duration-200`}
                >
                  {struct.title}
                </span>
              </li>
            ))}
          </ul>

          {/* Data Structures */}
          <ul className="pt-6 px-5">
            <h3 className="text-[#84919A] font-semibold text-[12px] pl-7 uppercase tracking-[0.018em]">
              Data Structure
            </h3>
            {DataStruc.map((struct, index) => (
              <div key={index}>
                <div
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-[#EEF0F2] duration-300 text-sm items-center gap-x-4 ${
                    index === 0 && "bg-light-white"
                  }`}
                  onClick={() => handleTitleClick(struct.title)}
                >
                  <img
                    src={chevronRight}
                    className={`${
                      isSelected === struct.title ? "rotate-90" : "rotate-0"
                    } transition duration-300 ease-in-out`}
                  />
                  <span
                    className={`font-semibold text-[#252C32] text-[14px] leading-5 tracking-[-0.006em] origin-left duration-200`}
                  >
                    {struct.title}
                  </span>
                </div>
                {isSelected === struct.title && (
                  <div className="ml-8 transition-all duration-300">
                    {struct.subContents.map((subStruct, subIndex) => (
                      <div
                        key={subIndex}
                        className={`flex p-2 cursor-pointer hover:bg-[#EEF0F2] duration-300 text-sm items-center gap-x-4 ${
                          selectedSubContent === subStruct.title &&
                          "bg-[#EEF0F2]"
                        }`}
                        onClick={() => handleSubContentClick(subStruct.title)}
                      >
                        <span className="font-semibold text-[#252C32] text-[14px] leading-5 tracking-[-0.006em] origin-left duration-200">
                          {subStruct.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ul>

          {/* Algorithms */}
          <ul className="pt-6 px-5">
            <h3
              className={`text-[#84919A] font-semibold text-[12px] pl-7 uppercase tracking-[0.018em]`}
            >
              Algorithms
            </h3>
            {Algo.map((struct, index) => (
              <div key={index}>
                <div
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-[#EEF0F2] duration-300 text-sm items-center gap-x-4 ${
                    index === 0 && "bg-light-white"
                  }`}
                  onClick={() => handleTitleClick(struct.title)}
                >
                  <img
                    src={chevronRight}
                    className={`${
                      isSelected === struct.title ? "rotate-90" : "rotate-0"
                    } transition duration-300 ease-in-out`}
                  />
                  <span
                    className={`font-semibold text-[#252C32] text-[14px] leading-5 tracking-[-0.006em] origin-left duration-200`}
                  >
                    {struct.title}
                  </span>
                </div>
                {isSelected === struct.title && (
                  <div className="ml-8">
                    {struct.subContents.map((subStruct, subIndex) => (
                      <div
                        key={subIndex}
                        className={`flex p-2 cursor-pointer hover:bg-[#EEF0F2] duration-300 text-sm items-center gap-x-4 ${
                          selectedSubContent === subStruct.title &&
                          "bg-[#EEF0F2]"
                        }`}
                        onClick={() => handleSubContentClick(subStruct.title)}
                      >
                        <span className="font-semibold text-[#252C32] text-[14px] leading-5 tracking-[-0.006em] origin-left duration-200">
                          {subStruct.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
