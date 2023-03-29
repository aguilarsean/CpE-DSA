import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [selectedSubContent, setSelectedSubContent] = useState(null);

  const handleSubContentClick = (subContent) => {
    setSelectedSubContent(subContent);
  };

  return (
    <main className="flex">
      <Sidebar onSubContentClick={handleSubContentClick} />
      <Content selectedSubContent={selectedSubContent} />
    </main>
  );
};

export default App;
