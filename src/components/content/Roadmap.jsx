import React from "react";

const Roadmap = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        Data Structures and Algorithms in C programming Roadmap
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Beginner</h2>
          <ul className="list-disc list-inside">
            <li>Introduction to C Programming</li>
            <li>Variables and Data Types</li>
            <li>Control Flow Statements</li>
            <li>Functions and Arrays</li>
            <li>Pointers and Dynamic Memory Allocation</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Intermediate</h2>
          <ul className="list-disc list-inside">
            <li>Recursion and Backtracking</li>
            <li>Sorting Algorithms</li>
            <li>Searching Algorithms</li>
            <li>Stacks, Queues, and Linked Lists</li>
            <li>Trees and Graphs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
