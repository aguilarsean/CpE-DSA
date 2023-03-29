import React from "react";
import arrayImg from "../../../assets/array.png";

const IntroArray = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto ">
      <h1 className="text-4xl font-bold mb-4">Introduction to Arrays</h1>
      <p className="mb-4">
        An array is a collection of elements of the same data type stored in
        contiguous memory locations. It is one of the most fundamental data
        structures in computer programming, and it is widely used in C
        programming.
      </p>
      <p className="mb-4">
        An array in C is declared by specifying the data type of the elements in
        the array, followed by the name of the array, and then the size of the
        array in square brackets. For example, to declare an array of 10
        integers, you would use the following syntax:
      </p>
      <pre className="bg-gray-200 rounded-md p-2 mb-4">int arr[10];</pre>
      <p className="mb-4">
        Arrays in C are zero-indexed, which means that the first element in the
        array has an index of 0. You can access the elements in an array by
        using the array name followed by the index of the element in square
        brackets. For example, to access the third element in the array, you
        would use the following syntax:
      </p>
      <pre className="bg-gray-200 rounded-md p-2 mb-4">
        int thirdElement = arr[2];
      </pre>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on arrays, such as insertion, deletion, sorting, and searching.
      </p>

      <img src={arrayImg} />

      <div>
        <h2 className="font-bold text-lg mb-2">Array Indexing</h2>
        <p className="mb-2">
          Arrays are indexed starting from zero, so the first element is at
          index 0, or
          <pre className="bg-gray-200 rounded-md p-2 mb-4">Array[0]</pre>
          and the last element is at index n-1{" "}
          {`(where n is the number of elements in the array)`}
          <pre className="bg-gray-200 rounded-md p-2 mb-4">Array[5]</pre>
        </p>

        <h2 className="font-bold text-lg mb-2">Array Initialization</h2>
        <p className="mb-2">
          Arrays can be initialized with values at decleration time using curly
          braces {`{}`}, like{" "}
          <pre className="bg-gray-200 rounded-md p-2 mb-4">{`int Array[] = {2, 4, 10, 5, 15, 3}`}</pre>
        </p>

        <h2 className="font-bold text-lg mb-2">Passing Arrays to Function</h2>
        <p className="mb-2">
          Arrays can be pased to functions as arguments, either by reference or
          by value.
        </p>
      </div>
    </div>
  );
};

export default IntroArray;
