import React from "react";

const ProgBasics = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">
        Programming Basics for Data Structures and Algorithms in C programming
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">
            Introduction to Programming
          </h2>
          <ul className="list-disc list-inside">
            <li>What is Programming?</li>
            <li>Basic Concepts of Programming</li>
            <li>Programming Languages and Compilers</li>
            <li>Integrated Development Environments (IDEs)</li>
            <li>Writing and Running a Simple C Program</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Variables and Data Types</h2>
          <ul className="list-disc list-inside">
            <li>Introduction to Variables and Data Types</li>
            <li>Primitive Data Types in C</li>
            <li>Declaring and Initializing Variables</li>
            <li>Type Conversion and Typecasting</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Control Flow Statements</h2>
          <ul className="list-disc list-inside">
            <li>Introduction to Control Flow Statements</li>
            <li>If-else Statements</li>
            <li>Switch Statements</li>
            <li>Loops - For, While, and Do-while</li>
            <li>Breaking and Continuing Loop Statements</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Functions and Arrays</h2>
          <ul className="list-disc list-inside">
            <li>Introduction to Functions</li>
            <li>Declaring and Defining Functions</li>
            <li>Passing Arguments to Functions</li>
            <li>Introduction to Arrays</li>
            <li>Declaring and Initializing Arrays</li>
            <li>Multi-dimensional Arrays</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">
            Pointers and Dynamic Memory Allocation
          </h2>
          <ul className="list-disc list-inside">
            <li>Introduction to Pointers</li>
            <li>Declaring and Initializing Pointers</li>
            <li>Pointer Arithmetic</li>
            <li>Dynamic Memory Allocation</li>
            <li>Memory Leaks and Dangling Pointers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgBasics;
