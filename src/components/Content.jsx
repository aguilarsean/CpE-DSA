import React from "react";
import Icon from "../assets/Icon.svg";

import IntroDSA from "./content/IntroDSA";
import Roadmap from "./content/Roadmap";
import ProgBasics from "./content/ProgBasics";
import Help from "./content/Help";

import IntroArray from "./content/Array/IntroArray";
import OpArray from "./content/Array/OpArray";

import IntroLL from "./content/Linked List/IntroLL";
import OpLL from "./content/Linked List/OpLL";
import SLL from "./content/Linked List/SLL";
import DLL from "./content/Linked List/DLL";
import CSLL from "./content/Linked List/CSLL";
import CDLL from "./content/Linked List/CDLL";

import IntroStack from "./content/Stack/IntroStack";
import OpStack from "./content/Stack/OpStack";
import ImpLL from "./content/Stack/ImpLL";

const Content = ({ selectedSubContent }) => {
  const updateUrl = (subContent) => {
    const url = `/${subContent.toLowerCase().replace(/ /g, "-")}`;
    window.history.pushState(null, null, url);
  };

  switch (selectedSubContent) {
    case "Introduction to DSA":
      updateUrl(selectedSubContent);
      return <IntroDSA />;
    case "Roadmap":
      updateUrl(selectedSubContent);
      return <Roadmap />;
    case "Programming Basics":
      updateUrl(selectedSubContent);
      return <ProgBasics />;
    case "Help":
      updateUrl(selectedSubContent);
      return <Help />;
    case "Introduction to Array":
      updateUrl(selectedSubContent);
      return <IntroArray />;
    case "Operations in Array":
      updateUrl(selectedSubContent);
      return <OpArray />;
    case "Introduction to Linked List":
      updateUrl(selectedSubContent);
      return <IntroLL />;
    case "Operations in Linked List":
      updateUrl(selectedSubContent);
      return <OpLL />;
    case "Singly Linked List":
      updateUrl(selectedSubContent);
      return <SLL />;
    case "Doubly Linked List":
      updateUrl(selectedSubContent);
      return <DLL />;
    case "Circular Linked List":
      updateUrl(selectedSubContent);
      return <CSLL />;
    case "Circular Doubly Linked List":
      updateUrl(selectedSubContent);
      return <CDLL />;
    case "Introduction to Stack":
      updateUrl(selectedSubContent);
      return <IntroStack />;
    case "Operations in Stack":
      updateUrl(selectedSubContent);
      return <OpStack />;
    case "Implement Stack using Linked List":
      updateUrl(selectedSubContent);
      return <ImpLL />;
    default:
      return (
        <div className="flex flex-row mx-auto">
          <div className="flex flex-col items-center gap-8 pt-[10rem]">
            <div className="flex flex-row justify-center items-center gap-3 bg-[#EEF0F2] px-6 py-1 rounded-full">
              <p className="font-semibold">Check the team dashboard</p>
              <img src={Icon} className="w-4 h-4" />
            </div>
            <h1 className="font-semibold text-[40px] lg:text-[60px] text-[#1A2024]">
              USC Computer Engineering
            </h1>
            <p className="text-[#667085] font-normal text-[20px] text-center">
              Discover the world of computer engineering and unleash your
              creativity <br />
              in designing cutting-edge software, hardware, and technologies.
            </p>

            <div className="flex flex-row gap-10">
              <button>Button One</button>
              <button>Button Two</button>
            </div>
          </div>
        </div>
      );
  }
};

export default Content;
